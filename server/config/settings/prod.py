from pathlib import Path
from env_config import Config
from .base import *

BASE_DIR = Path(__file__).resolve().parent.parent.parent
DEBUG = True
ALLOWED_HOSTS = ["dosnplwebserver.onrender.com", "server.dosnpl.com", "www.dosnpl.com", "dosnpl.com"]

ASGI_APPLICATION = 'config.asgi.application'

DATABASES = {
    "default": {
        "ENGINE": Config.ENGINE,
        "NAME": Config.NAME,
        "USER": Config.USER,
        "PASSWORD": Config.PASSWORD,
        "HOST": Config.HOST,
        "PORT": 5432
    }
}