import sqlite3
import json
import os

DB_FILE = 'hkgn_store.db'

def get_db_connection():
    conn = sqlite3.connect(DB_FILE)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    conn = get_db_connection()
    cursor = conn.cursor()
    
    # Create products table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS products (
            id INTEGER PRIMARY KEY,
            name TEXT NOT NULL,
            category TEXT NOT NULL,
            price INTEGER NOT NULL,
            stock INTEGER NOT NULL,
            image TEXT NOT NULL,
            description TEXT NOT NULL
        )
    ''')
    
    # Create deleted_products table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS deleted_products (
            id INTEGER PRIMARY KEY,
            name TEXT NOT NULL,
            category TEXT NOT NULL,
            price INTEGER NOT NULL,
            stock INTEGER NOT NULL,
            image TEXT NOT NULL,
            description TEXT NOT NULL
        )
    ''')
    
    # Create orders table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS orders (
            id INTEGER PRIMARY KEY,
            orderNum INTEGER NOT NULL,
            customerName TEXT NOT NULL,
            customerMobile TEXT NOT NULL,
            customerAddress TEXT NOT NULL,
            paymentMode TEXT NOT NULL,
            items TEXT NOT NULL, -- JSON string representation
            totalAmount INTEGER NOT NULL,
            date TEXT NOT NULL,
            status TEXT NOT NULL
        )
    ''')
    
    conn.commit()
    
    # Pre-seed default products if database is empty
    cursor.execute('SELECT COUNT(*) FROM products')
    if cursor.fetchone()[0] == 0:
        SEED_PRODUCTS = [
          (1, "Urea Fertiliser (50kg Bag)", "fertilisers", 350, 25, "🌾", "High-quality nitrogenous fertiliser essential for boosting leafy green crop growth and crop health."),
          (2, "DAP Fertiliser (50kg Bag)", "fertilisers", 1350, 18, "📦", "Diammonium Phosphate containing rich phosphate content for healthy root systems and early crop vigor."),
          (3, "Organic Neem Oil Pesticide (1 Litre)", "pesticides", 280, 45, "🧪", "Cold-pressed pure organic neem oil pesticide. Safe bio-control against aphids, whiteflies, and scale pests."),
          (4, "Hybrid Tomato Seeds (100g Pack)", "seeds", 150, 30, "🍅", "High germination rate hybrid tomato seeds, resistant to common wilt and leaf curl diseases."),
          (5, "BT Cotton Seeds (450g Pack)", "seeds", 860, 12, "🌱", "Premium BT cotton seeds providing resistance to bollworms, ensuring high cotton crop yield.")
        ]
        cursor.executemany('''
            INSERT INTO products (id, name, category, price, stock, image, description)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        ''', SEED_PRODUCTS)
        conn.commit()
        print("Database pre-seeded with default products catalog.")
        
    conn.close()

def get_products():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM products')
    rows = cursor.fetchall()
    conn.close()
    return [dict(row) for row in rows]

def save_products(products_list):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('DELETE FROM products')
    for p in products_list:
        cursor.execute('''
            INSERT INTO products (id, name, category, price, stock, image, description)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        ''', (p['id'], p['name'], p['category'], p['price'], p['stock'], p['image'], p['description']))
    conn.commit()
    conn.close()

def get_deleted_products():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM deleted_products')
    rows = cursor.fetchall()
    conn.close()
    return [dict(row) for row in rows]

def save_deleted_products(deleted_list):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('DELETE FROM deleted_products')
    for p in deleted_list:
        cursor.execute('''
            INSERT INTO deleted_products (id, name, category, price, stock, image, description)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        ''', (p['id'], p['name'], p['category'], p['price'], p['stock'], p['image'], p['description']))
    conn.commit()
    conn.close()

def get_orders():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM orders')
    rows = cursor.fetchall()
    conn.close()
    
    orders = []
    for row in rows:
        order_dict = dict(row)
        order_dict['items'] = json.loads(order_dict['items'])
        orders.append(order_dict)
    return orders

def save_orders(orders_list):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('DELETE FROM orders')
    for o in orders_list:
        cursor.execute('''
            INSERT INTO orders (id, orderNum, customerName, customerMobile, customerAddress, paymentMode, items, totalAmount, date, status)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ''', (o['id'], o['orderNum'], o['customerName'], o['customerMobile'], o['customerAddress'], o['paymentMode'], json.dumps(o['items']), o['totalAmount'], o['date'], o['status']))
    conn.commit()
    conn.close()
