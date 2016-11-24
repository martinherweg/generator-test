
import * as webpack_utils from './webpack_utils';

const css_loaders = webpack_utils.cssLoaders();
console.log(webpack_base_config)
webpack_base_config.module.rules.push(css_loaders);

export default css_loaders;