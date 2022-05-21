<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

add_theme_support('align-wide');

/*-------------------------------------------------------------------------------------------------------*/

/* Load src folder javascripts that distributed into dist folder with WEBPACK
Webpack configuratation is in gulp-dev folder under themes folder*/
function load_javascripts() {
    wp_enqueue_script('dist', get_theme_file_uri('/dist/main.js'), array('jquery'), '1.1', true);
}
add_action('wp_enqueue_scripts', 'load_javascripts');

/*Load src folder stylesheets that distributed into dist folder with WEBPACK
Webpack configuratation is in gulp-dev folder under themes. I could have decided to import the main.css into my sass/style.scss but I decided to enqueue separately, so this way the source files(src folder) css load at once here, and page styles load separately with style.css */
function load_csss() {
    wp_enqueue_style('dist-style', get_theme_file_uri('/dist/main.css'), array(), '1.0.0', 'all');
}
add_action('wp_enqueue_scripts', 'load_csss');

/*-------------------------------------------------------------------------------------------------------*/

function admin_css() {
    wp_enqueue_style('dist-style', get_theme_file_uri('/sass/admin.css'), array(), '1.0.0', 'all');
}
add_action('admin_enqueue_scripts', 'admin_css');

/*-------------------------------------------------------------------------------------------------------*/

//Add Thumbnail Theme Support
add_theme_support('post-thumbnails');
add_image_size('mobile', 375, 760);
add_image_size('tablet', 1024, 768);
add_image_size('desktop', 1440, 900);
add_image_size('hd', 1920, 1080);

//Add selection choices in block editor for images
function swd_custom_image_sizes($sizes) {
    return array_merge($sizes, array(
        //Add your custom sizes here
        'mobile' => __('Mobile', 'swd'),
        'tablet' => __('Tablet', 'swd'),
        'desktop' => __('Desktop', 'swd'),
        'hd' => __('HD', 'swd'),
    ));
}

add_filter('image_size_names_choose', 'swd_custom_image_sizes');

//Remove not used thumbnail sizes
function add_image_insert_override($sizes) {
    unset($sizes['thumbnail'], $sizes['medium_large'], $sizes['medium'], $sizes['large'], $sizes['1536x1536'], $sizes['2048x2048']);

    return $sizes;
}

function remove_image_sizes_jordan() {
    remove_image_size('thumbnail');
    remove_image_size('medium_large');
    remove_image_size('medium');
    remove_image_size('large');
    remove_image_size('1536x1536');
    remove_image_size('2048x2048');
}

add_action('init', 'remove_image_sizes_jordan');
add_filter('intermediate_image_sizes_advanced', 'add_image_insert_override');
add_filter('big_image_size_threshold', '__return_false');
add_filter('image_size_names_choose', 'add_image_insert_override');

/*-------------------------------------------------------------------------------------------------------*/

//Register Navigational Menus
function register_novin_menus() {
    register_nav_menus(
        array(
            'mobile-menu-nav' => __('Mobile Menu', 'novin'),
            'footer-nav-1' => __('Footer Nav 1', 'novin'),
            'footer-nav-2' => __('Footer Nav 2', 'novin'),
        )
    );
}
add_action('init', 'register_novin_menus');

/*-------------------------------------------------------------------------------------------------------*/

//Manually Removing the Website URL Field From WordPress Comment Form
add_filter('comment_form_field_url', '__return_false');

/*-------------------------------------------------------------------------------------------------------*/

//WordPress customizer
require get_theme_file_path() . '/inc/php/customizer.php';

/*-------------------------------------------------------------------------------------------------------*/

//Loading animation by Jordan
require get_theme_file_path() . '/template-parts/loader.php';

/*-------------------------------------------------------------------------------------------------------*/

//Header contents by Jordan
require get_theme_file_path() . '/template-parts/header.php';

/*-------------------------------------------------------------------------------------------------------*/

//Footer contents by Jordan
require get_theme_file_path() . '/template-parts/footer.php';

/*-------------------------------------------------------------------------------------------------------*/

//Gutenberg Block Style for blockeditor
function swd_gutenberg_blocks() {
    wp_enqueue_script(
        'swd-blocks',
        get_theme_file_uri('inc/js/gutenberg-styles.js'),//Point to file
    array('wp-blocks', 'wp-dom-ready', 'wp-edit-post', 'jquery')
    );
}
add_action('enqueue_block_editor_assets', 'swd_gutenberg_blocks');

/*-------------------------------------------------------------------------------------------------------*/
