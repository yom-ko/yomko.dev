---
title: Extension Types in Dart
description: Review of the Extension Types in Dart
tags:
  - Dart
draft: false
featured: false
pubDatetime: 2024-03-22T15:05:00.000Z
modDatetime: 2025-01-04T23:50:00.000Z
author: Artyom Bondarenko
---
**Hi!**

This is how they look!

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

First of all, an extension type is a static type.
