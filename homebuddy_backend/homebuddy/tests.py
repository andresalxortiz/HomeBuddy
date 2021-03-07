from django.test import TestCase

# Create your tests here.
import pymongo 
from pymongo import MongoClient

dBName = "homebuddy"
collectionName= "homebuddy"

client = MongoClient("COPY PASTE HERE")

DB = client[dBName]
collection = DB[collectionName]

data = [
    {
        'name':'kcjndasj', 
         'age':'12'
    },
    {
        'name':'kcjj', 
         'age':'12lalskd'
    }
]

data = collection.insert_many(data)