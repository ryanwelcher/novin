<?php

/* Redefine Generate Footer without copyright */
/**
 * Build our footer.
 *
 * @since 1.3.42
 */
function generate_construct_footer() {
    ?>
<footer <?php generate_do_attr('site-info'); ?>>
    <?php do_action('novin_footer'); ?>
</footer>
<?php
}
    add_action('generate_footer', 'generate_construct_footer');

/* First Column */
function nv_footer_column_1() {
    ?>
<div class="nv-footer-infos nv-footer-column">

    <div class="novin-public-infos">
        <p class="novin-name">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="170" height="77"
                viewBox="0 0 170 77">
                <defs>
                    <filter id="NOVIN" x="0" y="0" width="170" height="77" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha" />
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feFlood flood-opacity="0.161" />
                        <feComposite operator="in" in2="blur" />
                        <feComposite in="SourceGraphic" />
                    </filter>
                </defs>
                <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#NOVIN)">
                    <text id="NOVIN-2" data-name="NOVIN" transform="translate(9 53)" fill="#b4b4b4" font-size="49"
                        font-family="HelveticaNeue-Medium, Helvetica Neue" font-weight="500">
                        <tspan x="0" y="0">NOVIN</tspan>
                    </text>
                </g>
            </svg>

        </p>
        <p class="novin-title">
            <?php bloginfo('name')?>
        </p>
        <p class="address">2013 Pomáz, Seregély utca 1.</p>
        <p class="email"><a href="mailto:kapcsolat@novin.hu" class="click">kapcsolat@novin.hu</a></p>
        <p class="telefon"><a href="tel:+36306021548" class="click">+36-30-602-1548</a></p>
    </div>

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

</div>
<?php
}

add_action('novin_footer', 'nv_footer_column_1', 15);

/* Second Column */
function nv_footer_column_2() {
    ?>
<div class="nv-footer-nav-1 nv-footer-column">
    <h3 class="footer-menu-name">
        <?php echo wp_get_nav_menu_name('footer-nav-1'); ?>
    </h3>
    <?php wp_nav_menu(
        array(
            'theme_location' => 'footer-nav-1',
            'container' => 'div',
            'container_class' => 'footer-menu-nav',
            'container_id' => 'footer-menu-nav',
            'menu_class' => ''
        )
    ); ?>

</div>
<?php
}

add_action('novin_footer', 'nv_footer_column_2', 20);

/* Third Column */
function nv_footer_column_3() {
    ?>
<div class="nv-footer-nav-2 nv-footer-column">
    <h3 class="footer-menu-name">
        <?php echo wp_get_nav_menu_name('footer-nav-2'); ?>
    </h3>
    <?php wp_nav_menu(
        array(
            'theme_location' => 'footer-nav-2',
            'container' => 'div',
            'container_class' => 'footer-menu-nav',
            'container_id' => 'footer-menu-nav',
            'menu_class' => ''
        )
    ); ?>
</div>
<?php
}

add_action('novin_footer', 'nv_footer_column_3', 25);

/* Footer Contact aka Footer 2 */
function nv_footer_contact() {
    //ACF field - is active footer contact?
    if (get_field('footer_contact_active')) : ?>

<div class="novin-footer-contact">
    <h2 class="contact-title">
        <?php _e('Lépjen velünk kapcsolatba', 'novin'); ?>
    </h2>
    <div class="contact-design-line"></div>
    <div class="contact-description">
        <?php the_field('footer_contact_description'); ?>
    </div>
    <div class="contact-icons">
        <a class="icon mail" href="mailto:kapcsolat@novin.hu" target="_self" rel="noopener noreferrer">
            <span class="circle">
                <svg xmlns="http://www.w3.org/2000/svg" width="40.5" height="36" viewBox="0 0 40.5 36">
                    <path id="Icon_awesome-mail-bulk" data-name="Icon awesome-mail-bulk"
                        d="M11.25,31.5c-1.8,0-3.6-1.575-4.5-2.25C2.25,26.1.9,24.975,0,24.3v9.45A2.25,2.25,0,0,0,2.25,36h18a2.25,2.25,0,0,0,2.25-2.25V24.3c-.9.675-2.25,1.8-6.75,4.95C14.85,29.925,13.05,31.5,11.25,31.5Zm9-13.5h-18A2.25,2.25,0,0,0,0,20.25v1.125c1.8,1.35,1.575,1.35,8.1,6.075.675.45,2.025,1.8,3.15,1.8s2.475-1.35,3.15-1.575c6.525-4.725,6.3-4.725,8.1-6.075V20.25A2.25,2.25,0,0,0,20.25,18Zm18-6.75H15.75A2.25,2.25,0,0,0,13.5,13.5v2.25h6.75a4.507,4.507,0,0,1,4.48,4.065l.02-.015v9.45h13.5A2.25,2.25,0,0,0,40.5,27V13.5A2.25,2.25,0,0,0,38.25,11.25Zm-2.25,9H31.5v-4.5H36ZM11.25,13.5A4.505,4.505,0,0,1,15.75,9H31.5V2.25A2.25,2.25,0,0,0,29.25,0H6.75A2.25,2.25,0,0,0,4.5,2.25v13.5h6.75Z" />
                </svg>
            </span>
            <p class="icon-text">
                <?php _e('Írjon emailt', 'novin'); ?>
            </p>
        </a>
        <a class="icon tel" href="tel:+36306021548" target="_self" rel="noopener noreferrer">
            <span class="circle">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
                    <path id="Icon_awesome-phone-alt" data-name="Icon awesome-phone-alt"
                        d="M34.973,25.439,27.1,22.064a1.687,1.687,0,0,0-1.969.485L21.641,26.81A26.062,26.062,0,0,1,9.183,14.351l4.261-3.488A1.683,1.683,0,0,0,13.929,8.9L10.554,1.02A1.7,1.7,0,0,0,8.62.043L1.308,1.73A1.688,1.688,0,0,0,0,3.375,32.621,32.621,0,0,0,32.625,36a1.687,1.687,0,0,0,1.645-1.308l1.687-7.313a1.708,1.708,0,0,0-.985-1.941Z"
                        transform="translate(0 0)" />
                </svg>
            </span>
            <p class="icon-text">
                <?php _e('Hívjon minket', 'novin'); ?>
            </p>
        </a>
        <a class="icon form"
            href="<?php home_url(_e('/kapcsolat', 'novin')); ?>"
            target="_self" rel="noopener noreferrer">
            <span class="circle">
                <svg xmlns="http://www.w3.org/2000/svg" width="31.5" height="31.507" viewBox="0 0 31.5 31.507">
                    <path id="Icon_awesome-wpforms" data-name="Icon awesome-wpforms"
                        d="M31.5,5.287V30.72a3,3,0,0,1-3.038,3.037H3.037A3.013,3.013,0,0,1,0,30.712V5.287A3,3,0,0,1,3.037,2.25H28.47A3,3,0,0,1,31.5,5.287ZM28.877,30.712V5.287a.417.417,0,0,0-.408-.408h-.654L20.06,10.125,15.75,6.616l-4.3,3.509L3.691,4.873H3.037a.417.417,0,0,0-.408.408V30.713a.417.417,0,0,0,.408.408H28.47a.408.408,0,0,0,.408-.408ZM10.561,13.078v2.6H5.393v-2.6Zm0,5.231v2.623H5.393V18.309Zm.78-10.357,3.8-3.073H6.806l4.535,3.073Zm14.766,5.126v2.6H12.326v-2.6Zm0,5.231v2.623H12.326V18.309ZM20.159,7.952,24.694,4.88H16.369l3.79,3.073Zm5.948,15.6v2.623H19.118V23.555h6.989Z"
                        transform="translate(0 -2.25)" />
                </svg>
            </span>
            <p class="icon-text">
                <?php _e('Kapcsolati űrlap', 'novin'); ?>
            </p>
        </a>
        <a class="icon messenger" href="mailto:kapcsolat@novin.hu" target="_self" rel="noopener noreferrer">
            <span class="circle">
                <svg xmlns="http://www.w3.org/2000/svg" width="34.875" height="34.873" viewBox="0 0 34.875 34.873">
                    <path id="Icon_awesome-facebook-messenger" data-name="Icon awesome-facebook-messenger"
                        d="M18.039.563C8.193.563.563,7.758.563,17.478A16.531,16.531,0,0,0,6.052,29.989c.587.528.466.834.566,4.094a1.4,1.4,0,0,0,1.96,1.235c3.72-1.638,3.768-1.768,4.4-1.6,10.778,2.966,22.461-3.931,22.461-16.245C35.438,7.758,27.885.563,18.039.563ZM28.532,13.579,23.4,21.705a2.628,2.628,0,0,1-3.791.7l-4.084-3.056a1.055,1.055,0,0,0-1.266,0l-5.51,4.179a.829.829,0,0,1-1.2-1.1L12.679,14.3a2.627,2.627,0,0,1,3.791-.7l4.082,3.056a1.055,1.055,0,0,0,1.266,0l5.513-4.175a.827.827,0,0,1,1.2,1.1Z"
                        transform="translate(-0.563 -0.563)" />
                </svg>
            </span>
            <p class="icon-text">
                <?php _e('Kattintson a messengerre', 'novin'); ?>
            </p>
        </a>
    </div>

</div>

<?php endif;
}

add_action('generate_after_main_content', 'nv_footer_contact');
