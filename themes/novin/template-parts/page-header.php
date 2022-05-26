<?php

//If page header is active
if (get_field('page_header')) :
    ?>

<section class="page-header">

    <!-- Left side - infos -->
    <div class="left-side">

        <h1 class="page-title">
            <?php the_field('page_title'); ?>
        </h1>

        <h2 class="page-subtitle">
            <?php the_field('page_subtitle'); ?>
        </h2>

        <div class="page-description">
            <?php the_field('page_description'); ?>
        </div>

        <?php

        if (get_field('page_button_active')) :

            $link = get_field('page_button_url');

            if ($link):
            $link_url = $link['url'];
            $link_title = $link['title'];
            $link_target = $link['target'] ? $link['target'] : '_self'; ?>
        <a class="page-cta-button"
            href="<?php echo esc_url($link_url); ?>"
            target="<?php echo esc_attr($link_target); ?>"><?php echo esc_html($link_title); ?>
        </a>
        <?php endif; ?>

        <?php endif; ?>

        <?php

        if (get_field('page_button_active_2')) :

        $link = get_field('page_button_url_2');

        if ($link):
        $link_url = $link['url'];
        $link_title = $link['title'];
        $link_target = $link['target'] ? $link['target'] : '_self'; ?>
        <a class="page-cta-button second-button"
            href="<?php echo esc_url($link_url); ?>"
            target="<?php echo esc_attr($link_target); ?>"><?php echo esc_html($link_title); ?>
        </a>
        <?php endif; ?>

        <?php endif; ?>





    </div>

    <!-- Right side - svg or image -->
    <div class="right-side">

        <?php
//if page_image_selection
        if (get_field('page_image_selection')) {
            //If page_image
            if (get_field('page_image')) : ?>

        <div class="page-header-image">
            <?php $image = get_field('page_image');
            $size = 'tablet';
            $thumb = $image['sizes'][$size];
            //if image
            if (!empty($image)): ?>
            <img src="<?php echo esc_url($thumb); ?>"
                alt="<?php echo esc_attr($image['alt']); ?>" />
            <?php endif; //endif image?>
        </div>

        <?php endif; //endif page_image
        } else { //else page_image_selection
        //if page_svg
        if (get_field('page_svg')) : ?>

        <div class="page-header-svg">
            <?php the_field('page_svg'); ?>
        </div>

        <?php endif; //endif page_svg
        } //endif page_image_selection?>

    </div>

</section>
<?php endif;
