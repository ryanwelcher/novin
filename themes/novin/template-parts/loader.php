<?php
/**
* Loading animation.
*
*/
if (! defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

function nv_loader_content()
{
    ?>
<div class="loader" style="visibility:hidden;">

</div>
<?php
}

add_action('nv_loader', 'nv_loader_content');
