# kotlin cli install
> cli相关命令安装

## site
- https://kotlinlang.org/
- https://kotlinlang.org/docs/command-line.html
- https://www.bilibili.com/video/BV1rE411k7Xe?p=3&spm_id_from=333.788.b_6d756c74695f70616765.3

## 安装
```shell
# 1. 安装
brew install kotlin

# 2. 更多多命令
kotlinc -help
```


## javap反推java代码
> 反编译。
javap HelloKt.class

## 编译
```shell
lotlinc Hello.kt 
```

## 运行
```shell
kotlin HelloKt.class
```

## 打成jar包
```shell
kotlinc hello.kt -include-runtime -d hello.jar
```
