fun main(args: Array<String>) {
  val list = listOf<String>("hello", "world", "hello aric")
  println("Hello world.")

  println("==== array==== ")
  list.forEach(System.out::println)

  println("==== array map with index ==== ")
  val list2 = list.mapIndexed { index, element -> "$index - $element" }


  // 字符串模板
  val a = 1;
  val b = "abc";
  val c = a.toString() + "---" + b;
  val d = "$a --- $b"

  println(c)
  println(d)


  println(list2)
}
