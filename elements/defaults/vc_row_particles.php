<?php
		
if(function_exists('vc_add_param')){
	vc_add_param('vc_row',array(
			"type" => "dropdown",
			"class" => "",
			"admin_label" => true,
			"heading" => esc_html__("Background Style", "tba-particles"),
			"param_name" => "pb_type",
			"value" => array(
				esc_html__("Default","tba-particles") => "",
				esc_html__("Particle Js","tba-particles") => "pjs",
			),
			"description" => esc_html__("Select the kind of background would you like to set for this row.","tba-particles"),
			"group" => esc_html__("Particles"),
		)
	);
	/* Particle Js Effect */
	vc_add_param('vc_row',array(
			"type" => "dropdown",
			"class" => "",
			"heading" => esc_html__("Particle Shape", "tba-particles"),
			"param_name" => "pjs_shape",
			"value" => array(
				esc_html__("Circle","tba-particles") => "circle",
				esc_html__("Edge","tba-particles") => "edge",
				esc_html__("Triangle","tba-particles") => "triangle",
				esc_html__("Polygon","tba-particles") => "polygon",
				esc_html__("Star","tba-particles") => "star",
				esc_html__("Image","tba-particles") => "image",
				),
			"std" => 'circle',
			'save_always' => true,
			"dependency" => array("element" => "pb_type", "value" => array("pjs")),
			"group" => esc_html__("Particles"),
		)
	);
	vc_add_param('vc_row',array(
			"type" => "attach_image",
			"class" => "",
			"heading" => esc_html__("Particle Image", "tba-particles"),
			"param_name" => "pjs_img",
			"dependency" => array("element" => "pjs_shape", "value" => array("image")),
			"group" => esc_html__("Particles"),
		)
	);
	vc_add_param('vc_row',array(
			"type" => "colorpicker",
			"class" => "",
			"heading" => esc_html__("Particle color", "tba-particles"),
			"param_name" => "pjs_color",
			"dependency" => array("element" => "pjs_shape","value" => array("circle", "edge", "triangle", "polygon", "star")),
			"value" => "#ffffff",
			'save_always' => true,
			"group" => esc_html__("Particles"),
		)
	);
	vc_add_param('vc_row',array(
			"type" => "textfield",
			"class" => "",
			"heading" => esc_html__("Particle Stroke", "tba-particles"),
			"param_name" => "pjs_stroke",
			"dependency" => array("element" => "pjs_shape","value" => array("circle", "edge", "triangle", "polygon", "star")),
			"value" => 0,
			"std" => 0,
			"group" => esc_html__("Particles"),
		)
	);
	vc_add_param('vc_row',array(
			"type" => "colorpicker",
			"class" => "",
			"heading" => esc_html__("stroke color", "tba-particles"),
			"param_name" => "pjs_scolor",
			"dependency" => array("element" => "pjs_shape","value" => array("circle", "edge", "triangle", "polygon", "star")),
			"value" => "#ffffff",
			'save_always' => true,
			"group" => esc_html__("Particles"),
		)
	);
	vc_add_param('vc_row',array(
			"type" => "textfield",
			"class" => "",
			"heading" => esc_html__("Particle Polygon Sides", "tba-particles"),
			"param_name" => "pjs_sides",
			"dependency" => array("element" => "pjs_shape", "value" => array("circle", "edge", "triangle", "polygon", "star")),
			"value" => 3,
			"std" => 3,
			"group" => esc_html__("Particles"),
		)
	);
	vc_add_param('vc_row',array(
			"type" => "textfield",
			"class" => "",
			"heading" => esc_html__("No of Particles", "tba-particles"),
			"param_name" => "pjs_count",
			"dependency" => array("element" => "pb_type", "value" => array("pjs")),
			"value" => 80,
			"std" => 80,
			"group" => esc_html__("Particles"),
		)
	);
	vc_add_param('vc_row',array(
			"type" => "textfield",
			"class" => "",
			"heading" => esc_html__("Particle Size", "tba-particles"),
			"param_name" => "pjs_size",
			"dependency" => array("element" => "pb_type", "value" => array("pjs")),
			"value" => 5,
			"std" => 5,
			"group" => esc_html__("Particles"),
		)
	);
	vc_add_param('vc_row',array(
			"type" => "checkbox",
			"class" => "",
			"heading" => esc_html__("Random Particle Size", "tba-particles"),
			"param_name" => "pjs_srandom",
			"dependency" => array("element" => "pb_type", "value" => array("pjs")),
			"value" => array(
				esc_html__("Yes","tba-particles") => "yes",
			),
			"std" => 'yes',
			'save_always' => true,
			"group" => esc_html__("Particles"),
		)
	);
	vc_add_param('vc_row',array(
			"type" => "checkbox",
			"class" => "",
			"heading" => esc_html__("Animate Particle Size", "tba-particles"),
			"param_name" => "pjs_sanimate",
			"dependency" => array("element" => "pb_type", "value" => array("pjs")),
			"value" => array(
				esc_html__("Yes","tba-particles") => "yes",
			),
			"group" => esc_html__("Particles"),
		)
	);
	vc_add_param('vc_row',array(
			"type" => "textfield",
			"class" => "",
			"heading" => esc_html__("Size Animation Speed", "tba-particles"),
			"param_name" => "pjs_sanispeed",
			"dependency" => array("element" => "pjs_sanimate", "value" => array("yes")),
			"value" => 40,
			"std" => 40,
			"group" => esc_html__("Particles"),
		)
	);
	vc_add_param('vc_row',array(
			"type" => "textfield",
			"class" => "",
			"heading" => esc_html__("Min. Size", "tba-particles"),
			"param_name" => "pjs_smin",
			"dependency" => array("element" => "pjs_sanimate", "value" => array("yes")),
			"value" => 0.1,
			"std" => 0.1,
			"group" => esc_html__("Particles"),
		)
	);
	vc_add_param('vc_row',array(
			"type" => "textfield",
			"class" => "",
			"heading" => esc_html__("Opacity", "tba-particles"),
			"param_name" => "pjs_opacity",
			"dependency" => array("element" => "pb_type", "value" => array("pjs")),
			"value" => "0.5",
			"group" => esc_html__("Particles"),
		)
	);
	vc_add_param('vc_row',array(
			"type" => "checkbox",
			"class" => "",
			"heading" => esc_html__("Random Opacity", "tba-particles"),
			"param_name" => "pjs_orandom",
			"dependency" => array("element" => "pb_type", "value" => array("pjs")),
			"value" => array(
				esc_html__("Yes","tba-particles") => "yes",
			),
			"group" => esc_html__("Particles"),
		)
	);
	vc_add_param('vc_row',array(
			"type" => "checkbox",
			"class" => "",
			"heading" => esc_html__("Animate Particle Opacity", "tba-particles"),
			"param_name" => "pjs_oanimate",
			"dependency" => array("element" => "pb_type", "value" => array("pjs")),
			"value" => array(
				esc_html__("Yes","tba-particles") => "yes",
			),
			"group" => esc_html__("Particles"),
		)
	);
	vc_add_param('vc_row',array(
			"type" => "textfield",
			"class" => "",
			"heading" => esc_html__("Opacity Animation Speed", "tba-particles"),
			"param_name" => "pjs_oanispeed",
			"dependency" => array("element" => "pjs_oanimate", "value" => array("yes")),
			"value" => 1,
			"std" => 1,
			"group" => esc_html__("Particles"),
		)
	);
	vc_add_param('vc_row',array(
			"type" => "textfield",
			"class" => "",
			"heading" => esc_html__("Min. Opacity", "tba-particles"),
			"param_name" => "pjs_omin",
			"dependency" => array("element" => "pjs_oanimate", "value" => array("yes")),
			"value" => 0.1,
			"std" => 0.1,
			"group" => esc_html__("Particles"),
		)
	);
	vc_add_param('vc_row',array(
			"type" => "checkbox",
			"class" => "",
			"heading" => esc_html__("Want Particle Linked ?", "tba-particles"),
			"param_name" => "pjs_link",
			"dependency" => array("element" => "pb_type", "value" => array("pjs")),
			"value" => array(
				esc_html__("Yes","tba-particles") => "yes",
			),
			"group" => esc_html__("Particles"),
		)
	);
	vc_add_param('vc_row',array(
			"type" => "textfield",
			"class" => "",
			"heading" => esc_html__("Distance for link", "tba-particles"),
			"param_name" => "pjs_ldistance",
			"dependency" => array("element" => "pjs_link", "value" => array("yes")),
			"value" => 150,
			"std" => 150,
			"group" => esc_html__("Particles"),
		)
	);
	vc_add_param('vc_row',array(
			"type" => "colorpicker",
			"class" => "",
			"heading" => esc_html__("Line Color", "tba-particles"),
			"param_name" => "pjs_lcolor",
			"dependency" => array("element" => "pb_type", "value" => array("pjs")),
			"value" => "#ffffff",
			'save_always' => true,
			"group" => esc_html__("Particles"),
		)
	);
	vc_add_param('vc_row',array(
			"type" => "textfield",
			"class" => "",
			"heading" => esc_html__("Line Opacity", "tba-particles"),
			"param_name" => "pjs_lopacity",
			"dependency" => array("element" => "pb_type", "value" => array("pjs")),
			"value" => 0.4,
			"std" => 0.4,
			"group" => esc_html__("Particles"),
		)
	);
	vc_add_param('vc_row',array(
			"type" => "textfield",
			"class" => "",
			"heading" => esc_html__("Line Width", "tba-particles"),
			"param_name" => "pjs_lwidth",
			"dependency" => array("element" => "pb_type", "value" => array("pjs")),
			"value" => 1,
			"std" => 1,
			"group" => esc_html__("Particles"),
		)
	);
	vc_add_param('vc_row',array(
			"type" => "checkbox",
			"class" => "",
			"heading" => esc_html__("Want Particle Move?", "tba-particles"),
			"param_name" => "pjs_move",
			"dependency" => array("element" => "pb_type", "value" => array("pjs")),
			"value" => array(
				esc_html__("Yes","tba-particles") => "yes",
			),
			"std" => 'yes',
			'save_always' => true,
			"group" => esc_html__("Particles"),
		)
	);
	vc_add_param('vc_row',array(
			"type" => "dropdown",
			"class" => "",
			"heading" => esc_html__("Particle Movement Direction", "tba-particles"),
			"param_name" => "pjs_direction",
			"value" => array(
				esc_html__("None","tba-particles") => "none",
				esc_html__("Top","tba-particles") => "top",
				esc_html__("Top Right","tba-particles") => "top-right",
				esc_html__("Right","tba-particles") => "right",
				esc_html__("Bottom Right","tba-particles") => "bottom-right",
				esc_html__("Bottom","tba-particles") => "bottom",
				esc_html__("Bottom Left","tba-particles") => "bottom-left",
				esc_html__("Left","tba-particles") => "left",
				esc_html__("Top Left","tba-particles") => "top-left",
				),
			"std" => 'none',
			'save_always' => true,
			"dependency" => array("element" => "pjs_move", "value" => array("yes")),
			"group" => esc_html__("Particles"),
		)
	);
	vc_add_param('vc_row',array(
			"type" => "checkbox",
			"class" => "",
			"heading" => esc_html__("Random Movement?", "tba-particles"),
			"param_name" => "pjs_mrandom",
			"dependency" => array("element" => "pjs_move", "value" => array("yes")),
			"value" => array(
				esc_html__("Yes","tba-particles") => "yes",
			),
			"group" => esc_html__("Particles"),
		)
	);
	vc_add_param('vc_row',array(
			"type" => "checkbox",
			"class" => "",
			"heading" => esc_html__("Move Straight?", "tba-particles"),
			"param_name" => "pjs_mstraight",
			"dependency" => array("element" => "pjs_move", "value" => array("yes")),
			"value" => array(
				esc_html__("Yes","tba-particles") => "yes",
			),
			"group" => esc_html__("Particles"),
		)
	);
	vc_add_param('vc_row',array(
			"type" => "textfield",
			"class" => "",
			"heading" => esc_html__("Particle Movement Speed", "tba-particles"),
			"param_name" => "pjs_mspeed",
			"dependency" => array("element" => "pjs_move", "value" => array("yes")),
			"value" => 6,
			"std" => 6,
			"group" => esc_html__("Particles"),
		)
	);
	vc_add_param('vc_row',array(
			"type" => "dropdown",
			"class" => "",
			"heading" => esc_html__("Particle Out Mode", "tba-particles"),
			"param_name" => "pjs_omode",
			"value" => array(
				esc_html__("Out","tba-particles") => "out",
				esc_html__("Bounce","tba-particles") => "bounce",
				),
			"std" => 'out',
			'save_always' => true,
			"dependency" => array("element" => "pjs_move", "value" => array("yes")),
			"group" => esc_html__("Particles"),
		)
	);
	vc_add_param('vc_row',array(
			"type" => "checkbox",
			"class" => "",
			"heading" => esc_html__("Active Hover Effect on Particles?", "tba-particles"),
			"param_name" => "pjs_hover",
			"dependency" => array("element" => "pb_type", "value" => array("pjs")),
			"value" => array(
				esc_html__("Yes","tba-particles") => "yes",
			),
			"std" => 'yes',
			'save_always' => true,
			"group" => esc_html__("Particles"),
		)
	);
	vc_add_param('vc_row',array(
			"type" => "dropdown",
			"class" => "",
			"heading" => esc_html__("Hover Effect", "tba-particles"),
			"param_name" => "pjs_onhover",
			"value" => array(
				esc_html__("Grab","tba-particles") => "grab",
				esc_html__("Bubble","tba-particles") => "bubble",
				esc_html__("Repulse","tba-particles") => "repulse",
				),
			"std" => 'grab',
			'save_always' => true,
			"dependency" => array("element" => "pjs_hover", "value" => array("yes")),
			"group" => esc_html__("Particles"),
		)
	);
	vc_add_param('vc_row',array(
			"type" => "checkbox",
			"class" => "",
			"heading" => esc_html__("Active Click Effect on Particles?", "tba-particles"),
			"param_name" => "pjs_click",
			"dependency" => array("element" => "pb_type", "value" => array("pjs")),
			"value" => array(
				esc_html__("Yes","tba-particles") => "yes",
			),
			"group" => esc_html__("Particles"),
		)
	);
	vc_add_param('vc_row',array(
			"type" => "dropdown",
			"class" => "",
			"heading" => esc_html__("Click Effect", "tba-particles"),
			"param_name" => "pjs_onclick",
			"value" => array(
				esc_html__("Push","tba-particles") => "push",
				esc_html__("Remove","tba-particles") => "remove",
				esc_html__("Bubble","tba-particles") => "bubble",
				esc_html__("Repulse","tba-particles") => "repulse",
				),
			"std" => 'push',
			'save_always' => true,
			"dependency" => array("element" => "pjs_click", "value" => array("yes")),
			"group" => esc_html__("Particles"),
		)
	);
	vc_add_param('vc_row',array(
			"type" => "textfield",
			"class" => "",
			"heading" => esc_html__("Particles Z-Index", "tba-particles"),
			"param_name" => "pjs_zindex",
			"dependency" => array("element" => "pb_type", "value" => array("pjs")),
			"value" => 0,
			"std" => 0,
			"group" => esc_html__("Particles"),
		)
	);
}