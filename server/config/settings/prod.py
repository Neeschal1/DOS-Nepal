from pathlib import Path
from env_config import Config
from .base import *

BASE_DIR = Path(__file__).resolve().parent.parent.parent
DEBUG = True
ALLOWED_HOSTS = ["*"]

ASGI_APPLICATION = 'config.asgi.application'

DATABASES = {
    "default": {
        "ENGINE": Config.ENGINE,
        "NAME": Config.NAME,
        "USER": Config.USER,
        "PASSWORD": Config.PASSWORD,
        "HOST": Config.HOST,
        "PORT": Config.PORT
    }
}