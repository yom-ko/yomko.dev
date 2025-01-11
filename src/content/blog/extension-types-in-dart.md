---
title: Extension Types in Dart
description: Review of the Extension Types in Dart
tags:
  - Dart
  - Language
draft: false
featured: false
pubDatetime: 2024-03-22T15:05:00.000Z
modDatetime: 2025-01-04T23:50:00.000Z
author: Artyom Bondarenko
---

**Hi!**

This is how they look:

```dart
void main() {
  final objE = E(4);
  final objEn = E.n(3);
  final objEm = E.m(5, 'Hello!');

  print(objE);
  print(objEn);
  print(objEm);
}

extension type E(int i) {
  E.n(this.i);
  E.m(int j, String foo) : i = j + foo.length;
}

// OUTPUT:
// 4
// 3
// 11

```

Extension types are similar to extension methods, but they are much more powerful!

```dart
void main() {
  final objE = E();

  print(objE.runtimeType);

  if (objE is int) print(objE.it);

  if (objE case int x) print(x.toRadixString(10));

  switch (objE) {
    case int(:final isEven):
      print('$objE (${isEven ? 'even' : 'odd'})');
  }

  final objEn = const E._(2);
  final objEm = E.otherName(3);

  print(objEn);
  print(objEm);
}

extension type const E._(int it) {
  E() : this._(42);
  E.otherName(this.it);
}

// OUTPUT:
// int
// 42
// 42
// 42 (even)
// 2
// 3
```

```dart

extension type E._(int i) {
  E.fromString(String foo) : i = int.parse(foo);
}
```
