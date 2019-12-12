import { registry } from 'gulp';

import './tasks/clean';
import './tasks/universal';
import './tasks/schematics';
import './tasks/breaking-changes';
import './tasks/ts-linting-rules';

const forwardRef = require('undertaker-forward-reference');
// tslint:disable-next-line: no-forward-ref
registry(forwardRef());

