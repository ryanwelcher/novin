<?php
/**
* Plugin Name:     Generatepress Hooks
* Description:     Remove Hooks from generapress theme
* Version:         1.0.0
* Author:          Jordan
* License:         GPL-2.0-or-later
* License URI:     https://www.gnu.org/licenses/gpl-2.0.html
* Text Domain:     novin
*
*/

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

// REMOVE WP EMOJI
function remove_emoji() {
    remove_action('wp_head', 'print_emoji_detection_script', 7);
    remove_action('wp_print_styles', 'print_emoji_styles');
    remove_action('generate_after_comment_text', 'generate_do_comment_reply_link', 10, 3);

    remove_action('admin_print_scripts', 'print_emoji_detection_script');
    remove_action('admin_print_styles', 'print_emoji_styles');
}
add_action('init', 'remove_emoji');

function remove_generate_credits_from_generatepress() {
    remove_action('generate_credits', 'generate_add_footer_info');
}
add_action('init', 'remove_generate_credits_from_generatepress');
