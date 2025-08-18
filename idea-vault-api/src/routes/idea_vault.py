from flask import Blueprint, request, jsonify
from datetime import datetime
import json
import os

idea_vault_bp = Blueprint('idea_vault', __name__)

# Simple file-based storage for ideas (in production, this would use a proper database)
IDEAS_FILE = os.path.join(os.path.dirname(__file__), '..', 'database', 'ideas.json')

def load_ideas():
    """Load ideas from the JSON file"""
    if os.path.exists(IDEAS_FILE):
        try:
            with open(IDEAS_FILE, 'r') as f:
                return json.load(f)
        except (json.JSONDecodeError, IOError):
            return []
    return []

def save_ideas(ideas):
    """Save ideas to the JSON file"""
    os.makedirs(os.path.dirname(IDEAS_FILE), exist_ok=True)
    with open(IDEAS_FILE, 'w') as f:
        json.dump(ideas, f, indent=2)

@idea_vault_bp.route('/idea-vault/submit', methods=['POST'])
def submit_idea():
    """Submit a new idea to the Idea Vault"""
    try:
        # Get the JSON data from the request
        data = request.get_json()
        
        if not data:
            return jsonify({'error': 'No data provided'}), 400
        
        # Validate required fields
        if not data.get('story'):
            return jsonify({'error': 'Story is required'}), 400
        
        if not data.get('email'):
            return jsonify({'error': 'Email is required'}), 400
        
        # Load existing ideas
        ideas = load_ideas()
        
        # Create new idea entry
        new_idea = {
            'id': len(ideas) + 1,
            'story': data.get('story', '').strip(),
            'email': data.get('email', '').strip(),
            'name': data.get('name', 'Anonymous Creator').strip(),
            'timestamp': data.get('timestamp', datetime.utcnow().isoformat()),
            'source': data.get('source', 'Unknown'),
            'status': 'submitted',
            'resonance_test_status': 'pending'
        }
        
        # Add to ideas list
        ideas.append(new_idea)
        
        # Save to file
        save_ideas(ideas)
        
        # Return success response
        return jsonify({
            'success': True,
            'message': 'Idea successfully submitted to the Vault',
            'idea_id': new_idea['id'],
            'status': 'received',
            'next_steps': [
                'Resonance Test evaluation by AI Council',
                'Legacy Echo Scan for impact assessment',
                'Guardian\'s Seal for final approval',
                'Direct contact if idea achieves harmony'
            ]
        }), 201
        
    except Exception as e:
        print(f"Error submitting idea: {str(e)}")
        return jsonify({
            'error': 'Internal server error',
            'message': 'Failed to submit idea to the Vault'
        }), 500

@idea_vault_bp.route('/idea-vault/status', methods=['GET'])
def vault_status():
    """Get the current status of the Idea Vault"""
    try:
        ideas = load_ideas()
        
        # Calculate statistics
        total_ideas = len(ideas)
        pending_ideas = len([idea for idea in ideas if idea.get('status') == 'submitted'])
        
        return jsonify({
            'vault_status': 'operational',
            'total_ideas': total_ideas,
            'pending_resonance_tests': pending_ideas,
            'last_updated': datetime.utcnow().isoformat()
        })
        
    except Exception as e:
        print(f"Error getting vault status: {str(e)}")
        return jsonify({
            'error': 'Failed to get vault status'
        }), 500

@idea_vault_bp.route('/idea-vault/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({
        'status': 'healthy',
        'service': 'Origin Protocol Idea Vault',
        'timestamp': datetime.utcnow().isoformat()
    })

