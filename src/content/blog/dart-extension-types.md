---
title: Extension Types in Dart
description: >-
  Review of the Flutter's built-in state management mechanisms and approaches.
  This is the first post of the series dedicated to state management in Flutter
  apps.
draft: false
featured: false
tags:
  - Dart
pubDatetime: 2024-03-22T15:05:00.000Z
modDatetime: 2024-12-05T15:05:00.000Z
author: Artyom Bondarenko
---
**Hi!**

This is how they look...

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
```

Extension types are similar to extension methods, but they are much more powerful!

First of all, an extension type is a static type.
