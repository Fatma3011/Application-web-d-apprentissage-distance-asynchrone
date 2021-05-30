import numpy as np
import pandas as pd  
from sklearn import datasets
from sklearn.model_selection import train_test_split
from decision_tree import DecisionTree

from sklearn import metrics

# def accuracy(y_true,y_pred):
#     accuray=np.sum(y_true == y_pred) / len(y_true)
#     return accuracy


data_set= pd.read_csv('D:/data.csv')  
  
#Extracting Independent and dependent Variable  
X= data_set.iloc[:, [0,1,2]].values  
y= data_set.iloc[:, 3].values  

# X_test=[[0.5, 0.1 , 10]]


# iris = datasets.load_iris()
# X, y = iris.data, iris.target
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=1234)


clf=DecisionTree(max_depth=10)
clf.fit(X_train, y_train)
y_pred=clf.predict(X_test)
print(y_pred)
print(metrics.classification_report(y_test,y_pred))
