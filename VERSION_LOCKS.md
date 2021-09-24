# Version locks

This file describes reasons for why some dependencies have an exact version instead of a caret one.

- `prettier@0.19.1` because changing prettier versions in project can introduce different formatting and terefore is possible to end up with more versions of formatting at one point in time
- `@storybook/addon-knobs@6.2.9` because higher versions remove @storybook/addon-knobs/register entrypoint and break the build
- `@copy-webpack-plugin@6.2.1` because higher versions are not compatible with `webpack@4`

# Dependencies update notes

- `@babel/core` throws build error in version `7.8.4`, be careful with updating
- `webpack` throws build error from version `5`, be careful with updating
