<?php
/**
 * Particles Backgrounds Addon for WPBakery Page Builder Lite
 *
 * @package           tba-particles
 * @author            BigDrop.gr
 * @copyright         2022 TheBasement.Agency
 * @license           GPL-2.0-or-later
 *
 * @wordpress-plugin
 * Plugin Name:       Particles Backgrounds Addon for WPBakery Page Builder Lite
 * Plugin URI:        https://thebasement.agency/portfolio_page/particles-backgrounds-addon-for-wpbakery-page-builder/
 * Description:       This powerful WordPress plugin adds pro-level particle backgrounds to the famous WPBakery Page Builder, allowing both novice and mid-level designers to wow their clients.
 * Version:           1.0.1
 * Tested up to:      6.2.2
 * Requires at least: 5.6.8
 * Requires PHP:      7.4
 * Author:            BigDrop.gr
 * Author URI:        https://bigdrop.gr
 * Text Domain:       tba-particles
 * License:           GPL v2 or later
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Domain Path:       /languages
 */

// If accessed directly exit;
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

add_action( 'plugins_loaded', 'tba_load_textdomain' );
/**
 * Load plugin textdomain.
 */
function tba_load_textdomain() {
    load_plugin_textdomain( 'tba-particles', false, dirname( plugin_basename( __FILE__ ) ) . '/languages/' ); 
}

class tba_background_particles {
    public function integrateWithVC() {
        // Check if WPBakery Page Builder is installed
        if ( ! defined( 'WPB_VC_VERSION' ) ) {
            // Display notice that Extend WPBakery Page Builder is required
            add_action('admin_notices', array( $this, 'showVcVersionNotice' ));
            return;
        }
 
        /*
        Add your WPBakery Page Builder logic here.
        Lets call vc_map function to "register" our custom shortcode within WPBakery Page Builder interface.

        More info: http://kb.wpbakery.com/index.php?title=Vc_map
        */

        /**
         * Call Defaults
         */ 
        // vc_row
        if ( file_exists( __DIR__."/elements/defaults/vc_row_particles.php" ) ){
            require(__DIR__."/elements/defaults/vc_row_particles.php");
        }

        // vc_particles_background_element
        if ( file_exists( __DIR__."/elements/addons/vc_particles_background_element.php" ) ){
            require(__DIR__."/elements/addons/vc_particles_background_element.php");
        }

    }

    function execute_tba_shortcode($output, $obj, $attr) {
        if($obj->settings('base')=='vc_row') {
            $output .= $this->tba_shortcode($attr, '');
        }
        return $output;
    }
    
    public static function tba_shortcode($atts, $content){
        $pb_type = $pb_dot_color = $pb_line_color = $pb_particle_radius = $pb_line_width = $pb_min_speedx = $pb_max_speedx = $pb_min_speedy = $pb_max_speedy = $pb_directionx = $pb_directiony = $pb_particle_density = $pb_smoke_preset = $pb_sm_line_width =  $pb_bg_inner = $pb_bg_outer = $pb_gradient_end = $pb_gradient_start = $pb_num_circles = $pb_radius_size = $pb_smoke_opacity = $pb_speed = $pjs_shape = $pjs_img = $pjs_color = $pjs_stroke = $pjs_scolor = $pjs_sides = $pjs_count = $pjs_size = $pjs_srandom = $pjs_sanimate = $pjs_sanispeed = $pjs_smin = $pjs_opacity = $pjs_orandom = $pjs_oanimate = $pjs_oanispeed = $pjs_omin = $pjs_link = $pjs_ldistance = $pjs_lcolor = $pjs_lopacity = $pjs_lwidth = $pjs_move = $pjs_direction = $pjs_mrandom = $pjs_mstraight = $pjs_mspeed = $pjs_omode = $pjs_hover = $pjs_onhover = $pjs_click = $pjs_onclick = $pjs_zindex = "";
        
        extract( shortcode_atts( array( "pb_type" => "", "pb_dot_color" => "", "pb_line_color" => "", "pb_particle_radius" => "", "pb_line_width" => "", "pb_min_speedx" => "", "pb_max_speedx" => "", "pb_min_speedy" => "", "pb_max_speedy" => "", "pb_directionx" => "", "pb_directiony" => "", "pb_particle_density" => "", "pb_smoke_preset" => "", "pb_bg_inner" => "", "pb_bg_outer" => "", "pb_gradient_end" => "", "pb_gradient_start" => "", "pb_num_circles" => "", "pb_radius_size" => "", "pb_smoke_opacity" => "", "pb_sm_line_width" => "", "pb_speed" => "", "pjs_shape" => "", "pjs_img" => "", "pjs_color" => "", "pjs_stroke" => "", "pjs_scolor" => "", "pjs_sides" => "", "pjs_count" => "", "pjs_size" => "", "pjs_srandom" => "", "pjs_sanimate" => "", "pjs_sanispeed" => "", "pjs_smin" => "", "pjs_opacity" => "", "pjs_orandom" => "", "pjs_oanimate" => "", "pjs_oanispeed" => "", "pjs_omin" => "", "pjs_link" => "", "pjs_ldistance" => "", "pjs_lcolor" => "", "pjs_lopacity" => "", "pjs_lwidth" => "", "pjs_move" => "", "pjs_direction" => "", "pjs_mrandom" => "", "pjs_mstraight" => "", "pjs_mspeed" => "", "pjs_omode" => "", "pjs_hover" => "", "pjs_onhover" => "", "pjs_click" => "", "pjs_onclick" => "", "pjs_zindex" => "" ), $atts ) );
        
        $js_path = '/assets/js/';
        $css_path = '/assets/css/';

        $html = "";
        
        if($pb_type != '') {
            
            wp_register_style( 'tba_style', plugins_url($css_path,__FILE__).'tba_style.css' );
            wp_enqueue_style( 'tba_style' );
            
            if($pb_type == 'pjs') {
                
                wp_enqueue_script('pb-row-pjs',plugins_url('/particles-lib/particles.js/',__FILE__).'particles.js', array( 'jquery' ));
                
                $pid = substr(str_shuffle(str_repeat('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',5)),0,5);
                
                $p_img = wp_get_attachment_image_src($pjs_img, 'full');
                
                if ( isset($p_img[0])): 
                    $p_img[0]; 
                else:
                    $p_img[0] = '';
                endif;

                $html .= '<div class="particle_pjs_ref" data-id="'.$pid.'" data-shape="'.$pjs_shape.'" data-img="'.$p_img[0].'" data-pcolor="'.$pjs_color.'" data-stroke="'.$pjs_stroke.'" data-scolor="'.$pjs_scolor.'" data-sides="'.$pjs_sides.'" data-count="'.$pjs_count.'" data-size="'.$pjs_size.'" data-srandom="'.$pjs_srandom.'" data-sanimate="'.$pjs_sanimate.'" data-sanispeed="'.$pjs_sanispeed.'" data-smin="'.$pjs_smin.'" data-opacity="'.$pjs_opacity.'" data-orandom="'.$pjs_orandom.'" data-oanimate="'.$pjs_oanimate.'" data-oanispeed="'.$pjs_oanispeed.'" data-omin="'.$pjs_omin.'" data-link="'.$pjs_link.'" data-ldistance="'.$pjs_ldistance.'" data-lcolor="'.$pjs_lcolor.'" data-lopacity="'.$pjs_lopacity.'" data-lwidth="'.$pjs_lwidth.'" data-move="'.$pjs_move.'" data-direction="'.$pjs_direction.'" data-mrandom="'.$pjs_mrandom.'" data-mstraight="'.$pjs_mstraight.'" data-mspeed="'.$pjs_mspeed.'" data-omode="'.$pjs_omode.'" data-hover="'.$pjs_hover.'" data-onhover="'.$pjs_onhover.'" data-click="'.$pjs_click.'" data-onclick="'.$pjs_onclick.'"></div>';

                // Set html inline css of z-index
                wp_register_script( 'tba-js-footer', '', array("jquery"), '', true );
                wp_add_inline_script( 'tba-js-footer',
                    "setTimeout(function () {
                        jQuery('#$pid').css('zIndex', $pjs_zindex);
                     }, 1200);

                     jQuery(document).ready(function() {
                        window.dispatchEvent(new Event('resize'));
                    });
                ");
            }
            
            wp_enqueue_script('tba-row-common',plugins_url($js_path,__FILE__).'particle_common.js');

            wp_enqueue_script('tba-row-common',plugins_url($js_path,__FILE__).'particle_common.min.js');
        }
        
        $output = $html;
        
        return $output;
    }
    
    function tba_css_classes( $class_string, $tag = null ) {
        if ( $tag == 'vc_row' ) {
            $class_string .= " pb_bg";
        }
        
        return $class_string;
    }
    
    /*
    Shortcode logic how it should be rendered
    */
    function theShortcode($Atts, $Content = null) {
        wp_enqueue_script(  array( 'jquery','tba-particles-backgrounds','tba-particles-js' ) );
        
        $image = wp_get_attachment_image_srcset($Atts, 'full');
        
        $Return = '<div id="'.$Atts['theid'].'" ';
        foreach ($Atts as $AttN => $AttV) {
            $Return .= 'data-'.str_replace("_","-",$AttN).'="'.$AttV.'" ';
        }
        $Return .= 'class="tba-particles-background" style="display:none;"></div>';
        
        return $Return;
    }

    /*
    Load plugin css and javascript files which you may need on front end of your site
    */
    function loadCssAndJs() {
        wp_register_script( 'tba-particles-backgrounds', plugins_url('js/tbaparticles.js',__FILE__ ),  );
        wp_register_script( 'tba-particles-js', plugins_url('particles-lib/particles.js/particles.min.js',__FILE__ ) );
    }

    /*
    Show notice if your plugin is activated but Visual Composer is not
    */
    function showVcVersionNotice() {
        $plugin_data = get_plugin_data(__FILE__);
        echo '
        <div class="updated">
          <p>'.sprintf(__('<strong>%s</strong> requires <strong><a href="http://bit.ly/vcomposer" target="_blank">Visual Composer</a></strong> plugin to be installed and activated on your site.', 'vc_extend'), $plugin_data['Name']).'</p>
        </div>';
    }

    function registerShortcode() {
        add_shortcode( 'tba_particles_background', array($this,'theShortcode') );
        $this->integrateWithVC();
    }

    function custom_css_classes_for_vc_row_and_vc_column( $class_string, $tag ) {
      if ( $tag == 'vc_row' || $tag == 'vc_row_inner' ) {
        if (strpos($class_string,'vc_tba_row') == false) { $class_string = $class_string . " vc_tba_row"; }
      }
      if ( $tag == 'vc_column' || $tag == 'vc_column_inner' ) {
        if (strpos($class_string,'vc_tba_column') == false) { $class_string = $class_string . " vc_tba_column"; }
      }
      if ( $tag == 'vc_section' || $tag == 'vc_section_inner' ) {
        if (strpos($class_string,'vc_tba_section') == false) { $class_string = $class_string . " vc_tba_section"; }
      }
      return $class_string;
    }

    function lastEnqueue(){
        // Register scripts
        wp_enqueue_script( 'tba-js-footer' );
    }

    function __construct() {

        // We safely integrate with VC with this hook
        add_action( 'init', array( $this, 'registerShortcode') );  
        
        // Register CSS and JS
        add_action( 'wp_enqueue_scripts', array( $this, 'loadCssAndJs' ) );

        // Enqueue last
        add_action( 'wp_enqueue_scripts', array( $this, 'lastEnqueue' ), 20, 3 );

        // Register Custom Css class
        add_filter( 'vc_shortcodes_css_class', array($this,'custom_css_classes_for_vc_row_and_vc_column'), 10, 2 );

        // VC_ROW Related
        add_filter('vc_shortcode_output',array($this, 'execute_tba_shortcode'),10,3);
        add_filter( 'vc_shortcodes_css_class', array($this, 'tba_css_classes'), 10, 2 );

    }
}

add_filter( "plugin_action_links_". plugin_basename(__FILE__), 'tba_paid_link' );

// This is the settings_link method which is responsible for creating the "Buy Premium" action button in plugins page.
function tba_paid_link( $links ) {
    $settings_link = '<a href="https://particles.thebasement.agency/">Buy Premium</a>';
    
    array_push( $links, $settings_link );
    
    return $links;
}

// Finally initialize code
new tba_background_particles();