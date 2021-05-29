import numpy as np
import pandas as pd  
from sklearn import datasets
from sklearn.model_selection import train_test_split
import matplotlib.pyplot as plt
from matplotlib.colors import ListedColormap
cmap = ListedColormap(['#FF0000', '#00FF00', '#0000FF','#FFFF00'])
from knn import KNN
from sklearn import metrics




data_set= pd.read_csv('D:/data.csv')  
  
#Extracting Independent and dependent Variable  
X= data_set.iloc[:, [0,1,2]].values  
y= data_set.iloc[:, 3].values  




# iris = datasets.load_iris()
# X, y = iris.data, iris.target

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=1234)

# Inspect data

# plt.figure()
# plt.scatter(X[:, 0], X[:, 1], c=y, cmap=cmap, edgecolor='k', s=20)
# plt.show()

k = 3
clf = KNN(k=k)
clf.fit(X_train, y_train)
#X_test=[[2.7, 0.7 , 40]]

y_pred = clf.predict(X_test)
print(y_pred)
print(metrics.classification_report(y_test,y_pred))
