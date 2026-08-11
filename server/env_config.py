import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    SECRET_KEY = os.getenv('SECRET_KEY')
    
    SMTP_API_KEY = os.getenv('SMTP_API_KEY')
    SMS_NAME = os.getenv('SMS_NAME')
    SMS_EMAIL = os.getenv('SMS_EMAIL')
    
    ENGINE=os.getenv('ENGINE')
    NAME=os.getenv('NAME')
    USER=os.getenv('USER')
    PASSWORD=os.getenv('PASSWORD')
    HOST=os.getenv('HOST')
    PORT = int(os.getenv('PORT', '5432'))