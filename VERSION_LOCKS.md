# Version locks

This file describes reasons for why some dependencies have an exact version instead of a caret one.

- `prettier@0.19.1` because changing prettier versions in project can introduce different formatting and terefore is possible to end up with more versions of formatting at one point in time

# Dependencies update notes

- `@babel/core` throws build error in version `7.8.4`, be careful with updating
