---
slug: cpp
title: C++
tags: [c++, cpp, language]
---

C++ is a programming language. Here's all you would need of c++.

<!--truncate-->

## Basic Code

```cpp
#include <iostream>
using namespace std;

int main(){

    return 0;
}
```

## i/o

```cpp
cin>>n;
cout<<n;
```

## Data types

```cpp
int i;
float f;
double d;
char c;
bool b;
string s;
```

## Control structures

### conditional

#### if else

```cpp
if(condition){

}
```

```cpp
if(condition){

}else{

}
```

```cpp
if(condition){

}else if{

}else{

}
```

#### switch

```cpp
switch(variable){
    case value1:
            // code
            break;
    case value2:
            // code
            break;
    default:
            // code
}
```

#### ternary

```cpp
condition ? true : false
```

### loops

#### while

```cpp
while(condition){

}
```

#### do while

```cpp
do{

}while(condition)
```

#### for

```cpp
for(initialization: condition; update){

}
```

:::tip
Some commonly used snippets:

```cpp
for(int i=0; i<n; i++){

}
```

```cpp
for(auto i: v){

}
```

:::

## function

```cpp
returnType functionName(type param1, type param2){

        return value;
}
```
