import app from '../app'

app.directive('bookmarkList', () => {
  return {
    restrict: 'E',
    replace: true,
    template: require('./bookmarkList.html'),
    controller: ($scope) => {
      $scope.bookmarks = [
        {
          title: '具有超低停顿时间的垃圾回收算法Shenandoah',
          describe: 'Shenandoah是一种新的Java虚拟机GC算法，目标是利用现代多核CPU的优势，减少大堆内存在GC方面存在的停顿时间。Shenandoah后来被贡献给了OpenJDK，正式成为OpenJDK的开源项目，也就是JEP 189。',

        },
        {
          title: 'Spark 1.6发布：引入Dataset接口',
          describe: 'Spark 1.6包含了超过1000个patches，在这里主要展示三个方面的主题：新的Dataset API，性能提升(读取Parquet 50%的性能提升，自动内存管理，streaming state management十倍的性能提升），以及大量新的机器学习和统计分析算法。'},
        {
          title: 'Java类型推断将不再支持可变性规范',
          describe: 'Java类型推断是一项推荐的Java特性，允许开发人员使用var关键字代替显式的变量类型声明。最近的报道显示，由于社区内无法就区分可变和不可变变量的实现方式达成一致意见，Java类型推断将不再支持使用关键字区分可变的和不可变变量。提议的一些用来表示不可变变量的关键字包括val和let。为了避免对细枝末节的长期讨论，一些这样的例子将被排除以求简洁。尽管JEP并没有透露目标版本，Java 10可能会实现这些功能。'},
        {
          title: 'Julien Le Dem对使用Apache Arrow进行面向列的数据处理的未来的看法',
          describe: 'Apache Arrow是在内存中执行列式计算的开源标准，源于Apache Drill的内存列式数据结构。Apache Arrow旨在成为有效地在内存中保存数据并在不同执行引擎之间交换数据的事实上的方式，从而避免序列化。它由13个开源项目的主要开发人员提供支持，这些开源项目主要来自Apache，包括Calcite、Drill、Pandas、HBase、Spark和Storm。'},
      ]
    }
  }
})