#!/usr/bin/env python
# coding: utf-8

# In[54]:


import inspect
import googletrans
import random
import re


# In[55]:


inspect.getmembers(googletrans)


# In[56]:


from googletrans import Translator


# In[80]:


#string
string = "What is a machine if not a mind? What is a soul if not a machine?"


# In[81]:


#listify languages
listlangs = list(googletrans.LANGUAGES)
#and stick em in a list to avoid repeats
langslist = []


# In[82]:


#pick a random language
def randomlang(list):
    lang = random.choice(list)
    langslist.append(lang)


# In[83]:


x = range(0,27)
for item in x:
    randomlang(listlangs)


# In[84]:


#translate string into random language from eng
outstrings = []
def outtrans(languages):
    translator = Translator()
    for item in languages:
        fromeng = translator.translate(text=string,dest=item,src='en')
        outboundstr = fromeng.text
        outstrings.append(outboundstr)


# In[85]:


outtrans(langslist)


# In[86]:


#go back to english
instrings = []
def intrans(stringlist):
    translator = Translator()
    for item in stringlist:
        toeng = translator.translate(text=item,dest='en')
        inboundstr = toeng.text
        instrings.append(inboundstr)
        for item in instrings:
            print (item)


# In[87]:


intrans(outstrings)


# In[79]:





# In[ ]:




