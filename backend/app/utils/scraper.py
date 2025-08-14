# Web scraping helpers
from bs4 import BeautifulSoup
import requests

def scrape_website(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    return soup
