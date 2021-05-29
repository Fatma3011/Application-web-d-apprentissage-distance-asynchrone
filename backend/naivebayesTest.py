import numpy as np
import pandas as pd  
from sklearn.model_selection import train_test_split
from sklearn import datasets
import matplotlib.pyplot as plt

from naivebayes import NaiveBayes
from sklearn import metrics


data_set= pd.read_csv('D:/data.csv')  
  
#Extracting Independent and dependent Variable  
X= data_set.iloc[:, [0,1,2]].values  
y= data_set.iloc[:, 3].values


#X, y = datasets.make_classification(n_samples=1000, n_features=10, n_classes=2, random_state=123)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=123)

nb = NaiveBayes()
nb.fit(X_train, y_train)
y_pred = nb.predict(X_test)

print(metrics.classification_report(y_test,y_pred))
