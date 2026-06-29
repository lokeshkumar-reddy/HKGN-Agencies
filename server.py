import socketio
import eventlet
import os
import json
import database

PORT = 8000

# Initialize socketio server
sio = socketio.Server(cors_allowed_origins='*')

# Define Socket.io events
@sio.event
def connect(sid, environ):
    print(f"Client connected: {sid}")
    # Immediately send the current database state to the newly connected client
    products = database.get_products()
    deleted = database.get_deleted_products()
    orders = database.get_orders()
    
    sio.emit('init_data', {
        'products': products,
        'deleted': deleted,
        'orders': orders
    }, room=sid)

@sio.event
def update_products(sid, data):
    print("Received update_products")
    database.save_products(data)
    # Broadcast to all clients except sender
    sio.emit('products_updated', data, skip_sid=sid)

@sio.event
def update_deleted(sid, data):
    print("Received update_deleted")
    database.save_deleted_products(data)
    sio.emit('deleted_updated', data, skip_sid=sid)

@sio.event
def update_orders(sid, data):
    print("Received update_orders")
    database.save_orders(data)
    sio.emit('orders_updated', data, skip_sid=sid)

@sio.event
def disconnect(sid):
    print(f"Client disconnected: {sid}")

# Wrap with WSGI application to serve static files
app = socketio.WSGIApp(sio, static_files={
    '/': './index.html',
    '/index.html': './index.html',
    '/app.js': './app.js',
    '/style.css': './style.css',
    '/checkout.html': './checkout.html',
    '/checkout.js': './checkout.js',
    '/checkout.css': './checkout.css',
    '/worker.js': './worker.js',
    '/assets': './assets'
})

if __name__ == '__main__':
    # Initialize SQLite database schema and pre-seed data
    database.init_db()
    
    print(f"HKGN Agencies Real-time Socket.io Server running on port {PORT}")
    eventlet.wsgi.server(eventlet.listen(('', PORT)), app)
