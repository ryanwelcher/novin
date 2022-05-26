<?php

/* Template Name: References */

/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
 *
 * @package GeneratePress
 */

 /* Load the references custom post type with an ajax filter */
function load_all_novin_references() {
    ?>
<section class="novin-references-container">

    <div class="references-filter novin-filter">
        <?php
        $references_categories = get_terms(array(
            'taxonomy' => 'novin_services_categories',
            'hide_empty' => false,
            'orderby' => 'term_order',
        ));
    /* Összes field */ ?>
        <a class="filter is-active" data-slug="all"><?php _e('Összes', 'novin'); ?></a>
        <?php
        /* List the category names and slugs */
        foreach ($references_categories as $category) {?>
        <a class="filter"
            data-slug="<?php echo $category->slug; ?>"><?php _e($category->name, 'novin'); ?></a>
        <?php } ?>
    </div>

    <div class="references-posts">
        <?php
            /*------------------------------------------------References-----------------------------------------------*/
            /** Display Custom Post Type Datas
            *
            *Custom Post Type: references
            *
            */

            $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;

    $args = array(
        'post_type' => 'references',
        'posts_per_page' => 6,
        'post_status' => 'publish',
        'paged' => $paged,
    );
    $references = new WP_Query($args); ?>


        <?php

                // The Loop
                if ($references->have_posts()) {
                    while ($references->have_posts()) :
                        $references->the_post(); ?>
        <article class="references-post">
            <?php the_post_thumbnail('mobile', array('class' => 'reference-post-image')); ?>
            <?php $logo = get_field('company_logo');
                    if ($logo) {
                        echo wp_get_attachment_image($logo, 'mobile', false, array('class' => 'reference-post-logo'));
                    } ?>
            <?php the_title('<h3 class="reference-post-title">', '</h3>'); ?>
            <?php the_excerpt(); ?>
        </article>
        <?php
                    endwhile;
                } else {
                    ?>
        <div class="no-posts-found"> <?php _e('No videos found', 'swd'); ?>
        </div>
        <?php
                } ?>
        <?php
            /*-----------------------------------------------------PAGINATION--------------------------------------------------*/
            ?>
    </div>
    <div class="references-navigation novin-navigation">
        <!-- pagination -->
        <nav class="pagination" aria-label="Pagination">
            <?php
                    $big = 999999999;
    echo paginate_links(array(
        'base' => str_replace($big, '%#%', get_pagenum_link($big)),
        'format' => '?paged=%#%',
        'current' => max(1, get_query_var('paged')),
        'total' => $references->max_num_pages,
        'prev_text' => '<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 34.875 34.875">
						<path id="Icon_awesome-arrow-alt-circle-left" data-name="Icon awesome-arrow-alt-circle-left" d="M18,35.438A17.438,17.438,0,1,1,35.438,18,17.434,17.434,0,0,1,18,35.438Zm8.156-20.531H18V9.921a.844.844,0,0,0-1.441-.6L8.522,17.4a.836.836,0,0,0,0,1.188l8.037,8.079a.844.844,0,0,0,1.441-.6V21.094h8.156A.846.846,0,0,0,27,20.25v-4.5A.846.846,0,0,0,26.156,14.906Z" transform="translate(-0.563 -0.563)"/>
						</svg>',
        'next_text' => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34.875 34.875">
						<path id="Icon_awesome-arrow-alt-circle-right" data-name="Icon awesome-arrow-alt-circle-right" d="M18,.563A17.438,17.438,0,1,1,.563,18,17.434,17.434,0,0,1,18,.563ZM9.844,21.094H18v4.985a.844.844,0,0,0,1.441.6L27.478,18.6a.836.836,0,0,0,0-1.188L19.441,9.323a.844.844,0,0,0-1.441.6v4.985H9.844A.846.846,0,0,0,9,15.75v4.5A.846.846,0,0,0,9.844,21.094Z" transform="translate(-0.563 -0.563)"/>
						</svg>'
    )); ?>
        </nav>
        <!-- /pagination -->
    </div>
    <?php
            /*----------------------------------------------------------------------------------------------*/
            /* Restore original Post Data */
            wp_reset_postdata(); ?>



</section>
<?php
}
add_action('novin_after_page_header', 'load_all_novin_references');

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

get_header(); ?>

<div <?php generate_do_attr('content'); ?>>
    <main <?php generate_do_attr('main'); ?>>
        <?php
            /**
             * generate_before_main_content hook.
             *
             * @since 0.1
             */
            do_action('generate_before_main_content');

            if (generate_has_default_loop()) {
                while (have_posts()) :

                    the_post();

                generate_do_template_part('page');

                endwhile;
            }

            /**
             * generate_after_main_content hook.
             *
             * @since 0.1
             */
            do_action('generate_after_main_content');
            ?>
    </main>
</div>

<?php
    /**
     * generate_after_primary_content_area hook.
     *
     * @since 2.0
     */
    do_action('generate_after_primary_content_area');

    generate_construct_sidebars();

    get_footer();
