<?php
/**
 * Plugin Name:       Novin blocks
 * Description:       Novin blocks for custom design
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Jordan
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       novin-blocks
 *
 * @package           novinblocks
 */

/**
 * Add custom "Podkit" block category
 *
 * @link https://wordpress.org/gutenberg/handbook/designers-developers/developers/filters/block-filters/#managing-block-categories
 */
add_filter('block_categories', 'novin_block_categories', 20, 2);

function novin_block_categories($categories, $post) {
    return array_merge(
        $categories,
        array(
            array(
                'slug' => 'novin-blocks',
                'title' => __('Novin Blocks', 'novin-blocks'),
            ),
        )
    );
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function novinblocks_novin_blocks_block_init() {
    $blocks = array(
        'block-one/', 'block-two/', 'block-three/', 'block-four/', 'block-five/', 'block-six/', 'block-seven/',

    );

    foreach ($blocks as $block) {
        register_block_type(plugin_dir_path(__FILE__) . 'includes/block-editor/blocks/' . $block);
    }
}
add_action('init', 'novinblocks_novin_blocks_block_init');
