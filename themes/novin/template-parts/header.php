<?php

/* Header Top Section */
function nv_top_header() {
    ?>
<div class="top-header">

    <div class="socials">
        <a href="https://www.facebook.com/" class="social-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="17.038" height="17.038" viewBox="0 0 17.038 17.038">
                <path id="Icon_awesome-facebook-square" data-name="Icon awesome-facebook-square"
                    d="M15.212,2.25H1.825A1.825,1.825,0,0,0,0,4.075V17.462a1.825,1.825,0,0,0,1.825,1.825h5.22V13.5h-2.4V10.769h2.4V8.691a3.328,3.328,0,0,1,3.562-3.669,14.515,14.515,0,0,1,2.111.184v2.32H11.53A1.363,1.363,0,0,0,9.993,9v1.77h2.616L12.19,13.5h-2.2v5.793h5.22a1.825,1.825,0,0,0,1.825-1.825V4.075A1.825,1.825,0,0,0,15.212,2.25Z"
                    transform="translate(0 -2.25)" />
            </svg>
        </a>
        <a href="https://www.linkedin.com/" class="social-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="17.038" height="17.038" viewBox="0 0 17.038 17.038">
                <path id="Icon_awesome-linkedin" data-name="Icon awesome-linkedin"
                    d="M15.821,2.25H1.213A1.222,1.222,0,0,0,0,3.478V18.06a1.222,1.222,0,0,0,1.213,1.228H15.821a1.225,1.225,0,0,0,1.217-1.228V3.478A1.225,1.225,0,0,0,15.821,2.25ZM5.149,16.854H2.624V8.723H5.153v8.131ZM3.887,7.612A1.464,1.464,0,1,1,5.351,6.148,1.465,1.465,0,0,1,3.887,7.612Zm10.729,9.242H12.09V12.9c0-.943-.019-2.156-1.312-2.156-1.316,0-1.517,1.027-1.517,2.088v4.024H6.735V8.723H9.158V9.833h.034a2.66,2.66,0,0,1,2.392-1.312c2.556,0,3.031,1.685,3.031,3.875Z"
                    transform="translate(0 -2.25)" />
            </svg>
        </a>
    </div>

    <div class="contacts">
        <div class="contact">
            <span class="text">email:</span>
            <a class="link" href="mailto:kapcsolat@novin.hu" class="click">kapcsolat@novin.hu</a>
        </div>
        <div class="contact">
            <span class="text">telefon:</span>
            <a class="link" href="tel:+36306021548" class="click">+36-30-602-1548</a>
        </div>
    </div>

    <div class="desktop-search">
        <?php echo do_shortcode('[wd_asp id=1]'); ?>
    </div>

    <div class="desktop-language-switcher">
        <a href="#">HU</a><a href="#">EN</a><a href="#">DE</a>
    </div>

</div>
<?php
}

add_action('generate_before_header_content', 'nv_top_header');

/* Header Bottom Section Open Tag */
function nv_bottom_header_open() {
    ?>
<div class="bottom-header">
    <div class="desktop-site-logo">
        <?php get_template_part('template-parts/logo')?>
    </div>
    <?php
}

add_action('generate_before_navigation', 'nv_bottom_header_open');

/* Header Bottom Section Close Tag */
function nv_bottom_header_close() {
    ?>
    <div class="hamburger hamburger--3dy">
        <div class="hamburger-box">
            <div class="hamburger-inner"></div>
        </div>
    </div>
</div>
<?php
}

add_action('generate_after_navigation', 'nv_bottom_header_close');

/* Mobile Header */
function nv_mobile_header() {
    ?>
<div class="mobile-header">

    <div class="mobile-search-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24.221" height="24.227" viewBox="0 0 24.221 24.227">
            <path id="Icon_ionic-ios-search" data-name="Icon ionic-ios-search"
                d="M28.437,26.967l-6.736-6.8a9.6,9.6,0,1,0-1.457,1.476L26.936,28.4a1.037,1.037,0,0,0,1.463.038A1.044,1.044,0,0,0,28.437,26.967Zm-14.28-5.242a7.58,7.58,0,1,1,5.361-2.22A7.534,7.534,0,0,1,14.157,21.725Z"
                transform="translate(-4.5 -4.493)" />
        </svg>
    </div>

    <div class="mobile-site-logo">
        <?php get_template_part('template-parts/logo')?>
    </div>

    <button class="hamburger hamburger--3dy" type="button">
        <span class="hamburger-box">
            <span class="hamburger-inner"></span>
        </span>
    </button>

    <div class="mobile-menu-border"></div>

    <div class="mobile-search">
        <?php echo do_shortcode('[wd_asp id=2]'); ?>
    </div>

</div>

<?php
}

add_action('generate_after_navigation', 'nv_mobile_header');

/* Mobile Menu Contents */
function nv_mobile_menu_contents() {
    ?>
<div class="mobile-menu nv-mobile-menu-contents">

    <div class="mobile-inside-logo">
        <?php get_template_part('template-parts/logo')?>
    </div>

    <div class="mobile-language-switcher">
        <a href="#">HU</a>
        <a href="#">EN</a>
        <a href="#">DE</a>
    </div>


    <?php wp_nav_menu(
        [
            'theme_location' => 'mobile-menu-nav',
            'container' => 'div',
            'container_class' => 'mobile-menu-nav',
            'container_id' => 'mobile-menu-nav',
            'menu_class' => ''
        ]
    ); ?>

    <div class="socials">
        <a href="https://www.facebook.com/" class="social-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="17.038" height="17.038" viewBox="0 0 17.038 17.038">
                <path id="Icon_awesome-facebook-square" data-name="Icon awesome-facebook-square"
                    d="M15.212,2.25H1.825A1.825,1.825,0,0,0,0,4.075V17.462a1.825,1.825,0,0,0,1.825,1.825h5.22V13.5h-2.4V10.769h2.4V8.691a3.328,3.328,0,0,1,3.562-3.669,14.515,14.515,0,0,1,2.111.184v2.32H11.53A1.363,1.363,0,0,0,9.993,9v1.77h2.616L12.19,13.5h-2.2v5.793h5.22a1.825,1.825,0,0,0,1.825-1.825V4.075A1.825,1.825,0,0,0,15.212,2.25Z"
                    transform="translate(0 -2.25)" />
            </svg>
        </a>
        <a href="https://www.linkedin.com/" class="social-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="17.038" height="17.038" viewBox="0 0 17.038 17.038">
                <path id="Icon_awesome-linkedin" data-name="Icon awesome-linkedin"
                    d="M15.821,2.25H1.213A1.222,1.222,0,0,0,0,3.478V18.06a1.222,1.222,0,0,0,1.213,1.228H15.821a1.225,1.225,0,0,0,1.217-1.228V3.478A1.225,1.225,0,0,0,15.821,2.25ZM5.149,16.854H2.624V8.723H5.153v8.131ZM3.887,7.612A1.464,1.464,0,1,1,5.351,6.148,1.465,1.465,0,0,1,3.887,7.612Zm10.729,9.242H12.09V12.9c0-.943-.019-2.156-1.312-2.156-1.316,0-1.517,1.027-1.517,2.088v4.024H6.735V8.723H9.158V9.833h.034a2.66,2.66,0,0,1,2.392-1.312c2.556,0,3.031,1.685,3.031,3.875Z"
                    transform="translate(0 -2.25)" />
            </svg>
        </a>
    </div>

    <div class="novin-public-infos">
        <p class="novin-title">
            <?php bloginfo('name')?>
        </p>
        <p class="address">2013 Pomáz, Seregély utca 1.</p>
        <a class="email" href="mailto:kapcsolat@novin.hu" class="click">kapcsolat@novin.hu</a>
        <br>
        <a class="telefon" href="tel:+36306021548" class="click">+36-30-602-1548</a>
    </div>


</div>

</div>

<?php
}

add_action('generate_after_navigation', 'nv_mobile_menu_contents');
