/* Particle Bg V4.7 */
jQuery(document).ready(function($) {
	$('.particle_matrix_ref').each( function() {
		var selector = $(this).prevAll('.pb_bg:first');
		if(!selector.length) {
			var selector = $(this).prevAll('.vc_row:first');
		}
		if(!selector.length) {
			var selector = $(this).prevAll('section:first');
		}
		if(!selector.length) {
			var selector = $(this).prevAll('div:first');
		}
		var dotColor = $(this).attr('data-dotColor');
		var lineColor = $(this).attr('data-lineColor');
		var particleRadius = $(this).attr('data-particleRadius');
		var lineWidth = $(this).attr('data-lineWidth');
		var minSpeedX = $(this).attr('data-minSpeedX');
		var maxSpeedX = $(this).attr('data-maxSpeedX');
		var minSpeedY = $(this).attr('data-minSpeedY');
		var maxSpeedY = $(this).attr('data-maxSpeedY');
		var directionX = $(this).attr('data-directionX');
		var directionY = $(this).attr('data-directionY');
		var density = $(this).attr('data-density');
		
		selector.prepend('<div class="pb_row particle_matrix" data-dotColor="'+dotColor+'" data-lineColor="'+lineColor+'"  data-particleRadius="'+particleRadius+'" data-lineWidth="'+lineWidth+'" data-minSpeedX="'+minSpeedX+'" data-maxSpeedX="'+maxSpeedX+'" data-minSpeedY="'+minSpeedY+'" data-maxSpeedY="'+maxSpeedY+'" data-directionX="'+directionX+'" data-directionY="'+directionY+'" data-density="'+density+'"></div>');
		
		$(this).remove();
	});
	
	$('.particle_matrix').each( function() {
		var dotColor = $(this).attr('data-dotColor');
		var lineColor = $(this).attr('data-lineColor');
		var particleRadius = parseInt($(this).attr('data-particleRadius'));
		var lineWidth = parseInt($(this).attr('data-lineWidth'));
		var minSpeedX = parseFloat($(this).attr('data-minSpeedX'));
		var maxSpeedX = parseFloat($(this).attr('data-maxSpeedX'));
		var minSpeedY = parseFloat($(this).attr('data-minSpeedY'));
		var maxSpeedY = parseFloat($(this).attr('data-maxSpeedY'));
		var directionX = $(this).attr('data-directionX');
		var directionY = $(this).attr('data-directionY');
		var density = parseInt($(this).attr('data-density'));
		
		$(this).particleground({
			dotColor: dotColor,
			lineColor: lineColor,
			particleRadius: particleRadius,
			lineWidth: lineWidth,
			minSpeedX: minSpeedX,
			maxSpeedX: maxSpeedX,
			minSpeedY: minSpeedY,
			maxSpeedY: maxSpeedY,
			directionX: directionX,
			directionY: directionY,
			density: density,
		});
	});
	
	$('.particle_smoke_ref').each( function() {
		var selector = $(this).prevAll('.pb_bg:first');
		if(!selector.length) {
			var selector = $(this).prevAll('.vc_row:first');
		}
		if(!selector.length) {
			var selector = $(this).prevAll('section:first');
		}
		if(!selector.length) {
			var selector = $(this).prevAll('div:first');
		}
		var gradientEnd = $(this).attr('data-gradientEnd');
		var gradientStart = $(this).attr('data-gradientStart');
		var lineWidth = $(this).attr('data-lineWidth');
		var numCircles = $(this).attr('data-numCircles');
		var radiusSize = $(this).attr('data-radiusSize');
		var smokeOpacity = $(this).attr('data-smokeOpacity');
		var bgColorInner = $(this).attr('data-bgColorInner');
		var bgColorOuter = $(this).attr('data-bgColorOuter');
		var speed = $(this).attr('data-speed');
		
		selector.prepend('<div class="pb_row particle_smoke" data-gradientEnd="'+gradientEnd+'" data-gradientStart="'+gradientStart+'" data-lineWidth="'+lineWidth+'" data-numCircles="'+numCircles+'" data-radiusSize="'+radiusSize+'" data-smokeOpacity="'+smokeOpacity+'" data-bgColorInner="'+bgColorInner+'" data-bgColorOuter="'+bgColorOuter+'" data-speed="'+speed+'"><canvas></canvas></div>');
		
		$(this).remove();
	});
	
	$('.particle_smoke').each( function() {
		var gradientEnd = $(this).attr('data-gradientEnd');
		var gradientStart = $(this).attr('data-gradientStart');
		var lineWidth = parseFloat($(this).attr('data-lineWidth'));
		var numCircles = parseInt($(this).attr('data-numCircles'));
		var radiusSize = parseInt($(this).attr('data-radiusSize'));
		var smokeOpacity = parseFloat($(this).attr('data-smokeOpacity'));
		var bgColorInner = $(this).attr('data-bgColorInner');
		var bgColorOuter = $(this).attr('data-bgColorOuter');
		var speed = parseInt($(this).attr('data-speed'));
		
		if(!gradientEnd) gradientEnd = '#222222';
		if(!gradientStart) gradientStart = '#000000';
		if(!lineWidth) lineWidth = 1;
		if(!numCircles) numCircles = 1;
		if(!radiusSize) radiusSize = 100;
		if(!smokeOpacity) smokeOpacity = 0.1;
		if(!bgColorInner) bgColorInner = '#ffffff';
		if(!bgColorOuter) bgColorOuter = '#666666';
		if(!speed) speed = 1;
		
		$(this).waterpipe({
			gradientStart: gradientStart,
			gradientEnd: gradientEnd,
			smokeOpacity: smokeOpacity,
			numCircles: numCircles,
			radiusSize: radiusSize,
			lineWidth: lineWidth,
			bgColorInner: bgColorInner,
			bgColorOuter: bgColorOuter,
			maxMaxRad: 'auto',
			minMaxRad: 'auto',
			speed: speed,
			minRadFactor: 0,
			iterations: 8,
			drawsPerFrame: 10,
		});
	});
	
	$('.particle_rain_ref').each( function() {
		var selector = $(this).prevAll('.pb_bg:first');
		if(!selector.length) {
			var selector = $(this).prevAll('.vc_row:first');
		}
		if(!selector.length) {
			var selector = $(this).prevAll('section:first');
		}
		if(!selector.length) {
			var selector = $(this).prevAll('div:first');
		}
		var imgsrc = $(this).attr('data-rainbg');
		var preset = $(this).attr('data-preset');
		var imgblurness = $(this).attr('data-imgblurness');
		selector.prepend('<div class="pb_row particle_rain" data-imgblurness="'+imgblurness+'" data-rainbg="'+imgsrc+'" data-preset="'+preset+'"></div>');
		
		$(this).remove();
	});
	
	$('.particle_rain').each( function(index) {
		var parent = this;
		var width = $(this).width();
		var height = $(this).height();
		var imgsrc = $(this).attr('data-rainbg');
		var preset = $(this).attr('data-preset');
		var imgblurness = $(this).attr('data-imgblurness');
		var image = new Image();
		if(preset == 4 ){
			var g_angle =  Math.PI / 9;
		}
		image.onload = function(index) {
			var engine = new RainyDay({
				image: this,
				blur: imgblurness,
				parentElement: parent,
				width: width,
				height: height,
				gravityAngle: g_angle,
				enableSizeChange: false
			});
			if(preset == 1){
				engine.rain([ [1, 2, 8000] ]);
				engine.rain([ [3, 3, 0.88], [5, 5, 0.9], [6, 2, 1] ], 100);
			} else if(preset == 2){
				engine.rain([ [3, 2, 2] ], 100);
			} else if(preset == 3){
				engine.rain([ [0, 2, 200], [3, 3, 1] ], 100);
			} else if(preset == 4){
				engine.trail = engine.TRAIL_SMUDGE;
                engine.rain([ [1, 0, 1000], [3, 3, 1] ], 100);
			} else if(preset == 5){
				engine.trail = engine.TRAIL_SMUDGE;
                engine.rain([ [3, 3, 0.1] ], 33);
			} else {
				engine.rain([ [1, 2, 8000] ]);
				engine.rain([ [3, 3, 0.88], [5, 5, 0.9], [6, 2, 1] ], 100);
			}
		};
		
		image.crossOrigin = 'anonymous';
        image.src = imgsrc;
		
	});
	
	$('.particle_pjs_ref').each( function() {
		var selector = $(this).prevAll('.pb_bg:first');
		if(!selector.length) {
			var selector = $(this).prevAll('.vc_row:first');
		}
		if(!selector.length) {
			var selector = $(this).prevAll('section:first');
		}
		if(!selector.length) {
			var selector = $(this).prevAll('div:first');
		}
		var id = $(this).attr('data-id');
		var shape = $(this).attr('data-shape');
		var pimg = $(this).attr('data-img');
		var pcolor = $(this).attr('data-pcolor');
		var stroke = $(this).attr('data-stroke');
		var scolor = $(this).attr('data-scolor');
		var sides = $(this).attr('data-sides');
		var count = $(this).attr('data-count');
		
		var size = $(this).attr('data-size');
		var srandom = $(this).attr('data-srandom');
		var sanimate = $(this).attr('data-sanimate');
		var sanispeed = $(this).attr('data-sanispeed');
		var smin = $(this).attr('data-smin');
		
		if(srandom == "yes") { srandom = true } else { srandom = false; }
		if(sanimate == "yes") { sanimate = true; } else { sanimate = false; }
		
		var opacity = $(this).attr('data-opacity');
		var orandom = $(this).attr('data-orandom');
		var oanimate = $(this).attr('data-oanimate');
		var oanispeed = $(this).attr('data-oanispeed');
		var omin = $(this).attr('data-omin');
		
		if(orandom == "yes") { orandom = true } else { orandom = false; }
		if(oanimate == "yes") { oanimate = true; } else { oanimate = false; }
		
		var llink = $(this).attr('data-link');
		var ldistance = $(this).attr('data-ldistance');
		var lcolor = $(this).attr('data-lcolor');
		var lopacity = $(this).attr('data-lopacity');
		var lwidth = $(this).attr('data-lwidth');
		
		if(llink == "yes") { llink = true } else { llink = false; }
		
		var move = $(this).attr('data-move');
		var direction = $(this).attr('data-direction');
		var mrandom = $(this).attr('data-mrandom');
		var mstraight = $(this).attr('data-mstraight');
		var mspeed = $(this).attr('data-mspeed');
		var omode = $(this).attr('data-omode');
		
		if(move == "yes") { move = true } else { move = false; }
		if(mrandom == "yes") { mrandom = true } else { mrandom = false; }
		if(mstraight == "yes") { mstraight = true } else { mstraight = false; }
		
		var ohover = $(this).attr('data-hover');
		var onhover = $(this).attr('data-onhover');
		var oclick = $(this).attr('data-click');
		var onclick = $(this).attr('data-onclick');
		
		if(ohover == "yes") { ohover = true } else { ohover = false; }
		if(oclick == "yes") { oclick = true } else { oclick = false; }
		
		if(!shape) shape = "circle";
		if(!pcolor) pcolor = "#ffffff";
		if(!stroke) stroke = 0;
		if(!scolor) scolor = "#ffffff";
		if(!sides) sides = 5;
		if(!count) count = 80;
		
		if(!size) size = 5;
		if(!srandom) srandom = false;
		if(!sanimate) sanimate = false;
		if(!sanispeed) sanispeed = 40;
		if(!smin) smin = 0.1;
		
		if(!opacity) opacity = 0.5;
		if(!orandom) orandom = false;
		if(!oanimate) oanimate = false;
		if(!oanispeed) oanispeed = 1;
		if(!omin) omin = 0.1;
		
		if(!llink) llink = false;
		if(!ldistance) ldistance = 150;
		if(!lcolor) lcolor = "#ffffff";
		if(!lopacity) lopacity = 0.4;
		if(!lwidth) lwidth = 1;
		
		if(!move) move = false;
		if(!direction) direction = "none";
		if(!mrandom) mrandom = false;
		if(!mstraight) mstraight = false;
		if(!mspeed) mspeed = 6;
		if(!omode) omode = "out";
		
		if(!ohover) ohover = false;
		if(!onhover) onhover = "repulse";
		if(!oclick) oclick = false;
		if(!onclick) onclick = "push";
		
		selector.prepend('<div class="pb_row particle_pjs" id="'+id+'"></div>');
		
		$(this).remove();
		
		var param = {
		  "particles": {
			"number": {
			  "value": count,
			  "density": {
				"enable": true,
				"value_area": 800
			  }
			},
			"color": {
			  "value": pcolor
			},
			"shape": {
			  "type": shape,
			  "stroke": {
				"width": stroke,
				"color": scolor
			  },
			  "polygon": {
				"nb_sides": sides
			  },
			  "image": {
				"src": pimg,
				"width": 100,
				"height": 100
			  }
			},
			"opacity": {
			  "value": opacity,
			  "random": orandom,
			  "anim": {
				"enable": oanimate,
				"speed": oanispeed,
				"opacity_min": omin,
				"sync": false
			  }
			},
			"size": {
			  "value": size,
			  "random": srandom,
			  "anim": {
				"enable": sanimate,
				"speed": sanispeed,
				"size_min": smin,
				"sync": false
			  }
			},
			"line_linked": {
			  "enable": llink,
			  "distance": ldistance,
			  "color": lcolor,
			  "opacity": lopacity,
			  "width": lwidth
			},
			"move": {
			  "enable": move,
			  "speed": mspeed,
			  "direction": direction,
			  "random": mrandom,
			  "straight": mstraight,
			  "out_mode": omode,
			  "attract": {
				"enable": false,
				"rotateX": 600,
				"rotateY": 1200
			  }
			}
		  },
		  "interactivity": {
			"detect_on": "canvas",
			"events": {
			  "onhover": {
				"enable": ohover,
				"mode": onhover
			  },
			  "onclick": {
				"enable": oclick,
				"mode": onclick
			  },
			  "resize": true
			},
			"modes": {
			  "grab": {
				"distance": 400,
				"line_linked": {
				  "opacity": 1
				}
			  },
			  "bubble": {
				"distance": 400,
				"size": 40,
				"duration": 2,
				"opacity": 8,
				"speed": 3
			  },
			  "repulse": {
				"distance": 200
			  },
			  "push": {
				"particles_nb": 4
			  },
			  "remove": {
				"particles_nb": 2
			  }
			}
		  },
		  "retina_detect": true,
		};
		
		particlesJS( id , param , function() {
  			console.log('Particles Generated');
		});
		
	});

	$('.flat_surf_ref').each( function() {
		var selector = $(this).prevAll('.pb_bg:first');
		if(!selector.length) {
			var selector = $(this).prevAll('.vc_row:first');
		}
		if(!selector.length) {
			var selector = $(this).prevAll('section:first');
		}
		if(!selector.length) {
			var selector = $(this).prevAll('div:first');
		}
		var id = $(this).attr('data-id');

		var depth = $(this).attr('data-depth');
		var segments = $(this).attr('data-segments');
		var slices = $(this).attr('data-slices');
		var xrange = $(this).attr('data-xrange');
		var yrange = $(this).attr('data-yrange');
		var zrange = $(this).attr('data-zrange');
		var mambient = $(this).attr('data-mambient');
		var mdiffuse = $(this).attr('data-mdiffuse');
		var count = $(this).attr('data-count');
		var xyscalar = $(this).attr('data-xyscalar');
		var zoffset = $(this).attr('data-zoffset');
		var lambient = $(this).attr('data-lambient');
		var ldiffuse = $(this).attr('data-ldiffuse');
		
		selector.prepend('<div id="'+id+'" class="pb_row flat_surface_shader"></div>');
		
		$(this).remove();

		//------------------------------
		// Mesh Properties
		//------------------------------

		var MESH = {
		    width: 1.2,
		    height: 1.2,
		    depth: depth,
		    segments: segments,
		    slices: slices,
		    xRange: xrange,
		    yRange: yrange,
		    zRange: zrange,
		    ambient: mambient,
		    diffuse: mdiffuse,
		    speed: 0.002
		};

		//------------------------------
  		// Light Properties
  		//------------------------------

  		var LIGHT = {
		    count: count,
		    xyScalar: xyscalar,
		    zOffset: zoffset,
		    ambient: lambient,
		    diffuse: ldiffuse,
		    speed: 0.001,
		    gravity: 1200,
		    dampening: 0.95,
		    minLimit: 10,
		    maxLimit: null,
		    minDistance: 20,
		    maxDistance: 400,
		    autopilot: false,
		    draw: true,
		    bounds: FSS.Vector3.create(),
		    step: FSS.Vector3.create(
		    	Math.randomInRange(0.2, 1.0),
		      	Math.randomInRange(0.2, 1.0),
		      	Math.randomInRange(0.2, 1.0)
		    )
		};

		var WEBGL = 'webgl';
		var CANVAS = 'canvas';
		var SVG = 'svg';
		var RENDER = { renderer: SVG };

		//------------------------------
  		// Global Properties
  		//------------------------------

  		var now, start = Date.now();
		var center = FSS.Vector3.create();
		var attractor = FSS.Vector3.create();
		var container = document.getElementById(id);
		var output = document.getElementById(id);
		var renderer, scene, mesh, geometry, material;
		var canvasRenderer;
		var autopilotController;

	    function initialise() {
		    createRenderer();
		    createScene();
		    createMesh();
		    createLights();
		    addEventListeners();
		    //addControls();
		    resize(container.offsetWidth, container.offsetHeight);
		    animate();
		}

		function createRenderer() {
		    canvasRenderer = new FSS.CanvasRenderer();
		    setRenderer(RENDER.renderer);
		}

		function setRenderer(index) {
		    if (renderer) {
		      output.removeChild(renderer.element);
		    }
		    switch(index) {
		      case WEBGL:
		        renderer = webglRenderer;
		        break;
		      case CANVAS:
		        renderer = canvasRenderer;
		        break;
		      case SVG:
		        renderer = svgRenderer;
		        break;
		    }
		    renderer.setSize(container.offsetWidth, container.offsetHeight);
		    output.appendChild(renderer.element);
		}

		function createScene() {
		    scene = new FSS.Scene();
		}

		function createMesh() {
		    scene.remove(mesh);
		    renderer.clear();
		    geometry = new FSS.Plane(MESH.width * renderer.width, MESH.height * renderer.height, MESH.segments, MESH.slices);
		    material = new FSS.Material(MESH.ambient, MESH.diffuse);
		    mesh = new FSS.Mesh(geometry, material);
		    scene.add(mesh);

		    // Augment vertices for animation
		    var v, vertex;
		    for (v = geometry.vertices.length - 1; v >= 0; v--) {
		      vertex = geometry.vertices[v];
		      vertex.anchor = FSS.Vector3.clone(vertex.position);
		      vertex.step = FSS.Vector3.create(
		        Math.randomInRange(0.2, 1.0),
		        Math.randomInRange(0.2, 1.0),
		        Math.randomInRange(0.2, 1.0)
		      );
		      vertex.time = Math.randomInRange(0, Math.PIM2);
		    }
		}

		function createLights() {
		    var l, light;
		    for (l = scene.lights.length - 1; l >= 0; l--) {
		      light = scene.lights[l];
		      scene.remove(light);
		    }
		    renderer.clear();
		    for (l = 0; l < LIGHT.count; l++) {
		      light = new FSS.Light(LIGHT.ambient, LIGHT.diffuse);
		      light.ambientHex = light.ambient.format();
		      light.diffuseHex = light.diffuse.format();
		      scene.add(light);

		      // Augment light for animation
		      light.mass = Math.randomInRange(0.5, 1);
		      light.velocity = FSS.Vector3.create();
		      light.acceleration = FSS.Vector3.create();
		      light.force = FSS.Vector3.create();

		      // Ring SVG Circle
		      light.ring = document.createElementNS(FSS.SVGNS, 'circle');
		      light.ring.setAttributeNS(null, 'stroke', light.ambientHex);
		      light.ring.setAttributeNS(null, 'stroke-width', '0.5');
		      light.ring.setAttributeNS(null, 'fill', 'none');
		      light.ring.setAttributeNS(null, 'r', '10');

		      // Core SVG Circle
		      light.core = document.createElementNS(FSS.SVGNS, 'circle');
		      light.core.setAttributeNS(null, 'fill', light.diffuseHex);
		      light.core.setAttributeNS(null, 'r', '4');
		    }
		}

	    function resize(width, height) {
		    renderer.setSize(width, height);
		    FSS.Vector3.set(center, renderer.halfWidth, renderer.halfHeight);
		    createMesh();
		}

		function animate() {
		    now = Date.now() - start;
		    update();
		    render();
		    requestAnimationFrame(animate);
		}

		function update() {
		    var ox, oy, oz, l, light, v, vertex, offset = MESH.depth/2;

		    // Update Bounds
		    FSS.Vector3.copy(LIGHT.bounds, center);
		    FSS.Vector3.multiplyScalar(LIGHT.bounds, LIGHT.xyScalar);

		    // Update Attractor
		    FSS.Vector3.setZ(attractor, LIGHT.zOffset);

		    // Overwrite the Attractor position
		    if (LIGHT.autopilot) {
		      ox = Math.sin(LIGHT.step[0] * now * LIGHT.speed);
		      oy = Math.cos(LIGHT.step[1] * now * LIGHT.speed);
		      FSS.Vector3.set(attractor,
		        LIGHT.bounds[0]*ox,
		        LIGHT.bounds[1]*oy,
		        LIGHT.zOffset);
		    }

		    // Animate Lights
		    for (l = scene.lights.length - 1; l >= 0; l--) {
		      light = scene.lights[l];

		      // Reset the z position of the light
		      FSS.Vector3.setZ(light.position, LIGHT.zOffset);

		      // Calculate the force Luke!
		      var D = Math.clamp(FSS.Vector3.distanceSquared(light.position, attractor), LIGHT.minDistance, LIGHT.maxDistance);
		      var F = LIGHT.gravity * light.mass / D;
		      FSS.Vector3.subtractVectors(light.force, attractor, light.position);
		      FSS.Vector3.normalise(light.force);
		      FSS.Vector3.multiplyScalar(light.force, F);

		      // Update the light position
		      FSS.Vector3.set(light.acceleration);
		      FSS.Vector3.add(light.acceleration, light.force);
		      FSS.Vector3.add(light.velocity, light.acceleration);
		      FSS.Vector3.multiplyScalar(light.velocity, LIGHT.dampening);
		      FSS.Vector3.limit(light.velocity, LIGHT.minLimit, LIGHT.maxLimit);
		      FSS.Vector3.add(light.position, light.velocity);
		    }

		    // Animate Vertices
		    for (v = geometry.vertices.length - 1; v >= 0; v--) {
		      vertex = geometry.vertices[v];
		      ox = Math.sin(vertex.time + vertex.step[0] * now * MESH.speed);
		      oy = Math.cos(vertex.time + vertex.step[1] * now * MESH.speed);
		      oz = Math.sin(vertex.time + vertex.step[2] * now * MESH.speed);
		      FSS.Vector3.set(vertex.position,
		        MESH.xRange*geometry.segmentWidth*ox,
		        MESH.yRange*geometry.sliceHeight*oy,
		        MESH.zRange*offset*oz - offset);
		      FSS.Vector3.add(vertex.position, vertex.anchor);
		    }

		    // Set the Geometry to dirty
		    geometry.dirty = true;
		}

		function render() {
		    renderer.render(scene);

		    // Draw Lights
		    if (LIGHT.draw) {
		      var l, lx, ly, light;
		      for (l = scene.lights.length - 1; l >= 0; l--) {
		        light = scene.lights[l];
		        lx = light.position[0];
		        ly = light.position[1];
		        switch(RENDER.renderer) {
		          case CANVAS:
		            renderer.context.lineWidth = 0.5;
		            renderer.context.beginPath();
		            renderer.context.arc(lx, ly, 10, 0, Math.PIM2);
		            renderer.context.strokeStyle = light.ambientHex;
		            renderer.context.stroke();
		            renderer.context.beginPath();
		            renderer.context.arc(lx, ly, 4, 0, Math.PIM2);
		            renderer.context.fillStyle = light.diffuseHex;
		            renderer.context.fill();
		            break;
		          case SVG:
		            lx += renderer.halfWidth;
		            ly = renderer.halfHeight - ly;
		            light.core.setAttributeNS(null, 'fill', light.diffuseHex);
		            light.core.setAttributeNS(null, 'cx', lx);
		            light.core.setAttributeNS(null, 'cy', ly);
		            renderer.element.appendChild(light.core);
		            light.ring.setAttributeNS(null, 'stroke', light.ambientHex);
		            light.ring.setAttributeNS(null, 'cx', lx);
		            light.ring.setAttributeNS(null, 'cy', ly);
		            renderer.element.appendChild(light.ring);
		            break;
		        }
		      }
		    }
		}

		function addEventListeners() {
		    window.addEventListener('resize', onWindowResize);
		    container.addEventListener('click', onMouseClick);
		    container.addEventListener('mousemove', onMouseMove);
		}

	    //------------------------------
  		// Callbacks
 		//------------------------------
		function onMouseClick(event) {
		    FSS.Vector3.set(attractor, event.x, renderer.height - event.y);
		    FSS.Vector3.subtract(attractor, center);
		    LIGHT.autopilot = !LIGHT.autopilot;
		    //autopilotController.updateDisplay();
		}

		function onMouseMove(event) {
		    FSS.Vector3.set(attractor, event.x, renderer.height - event.y);
		    FSS.Vector3.subtract(attractor, center);
		}

		function onWindowResize(event) {
		    resize(container.offsetWidth, container.offsetHeight);
		    render();
		}

		// Let there be light!
  		initialise();
	
	});

	$('.three_bird_ref').each( function() {
		var selector = $(this).prevAll('.pb_bg:first');
		if(!selector.length) {
			var selector = $(this).prevAll('.vc_row:first');
		}
		if(!selector.length) {
			var selector = $(this).prevAll('section:first');
		}
		if(!selector.length) {
			var selector = $(this).prevAll('div:first');
		}
		var id = $(this).attr('data-id');
		var bird_type = $(this).attr('data-birdtype');
		var bird_count = $(this).attr('data-birdcount');

		if(bird_count < 1 || !bird_count) {
			bird_count = 200;
		} 

		selector.prepend('<div id="'+id+'" class="pb_row three_birds"></div>');
		
		$(this).remove();

		var container = document.getElementById(id);
		var SCREEN_WIDTH = container.offsetWidth,
		SCREEN_HEIGHT = container.offsetHeight,
		SCREEN_WIDTH_HALF = SCREEN_WIDTH  / 2,
		SCREEN_HEIGHT_HALF = SCREEN_HEIGHT / 2;

		var camera, scene, renderer, birds, bird, boid, boids;

		init();
		animate();

		function init() {

			camera = new THREE.PerspectiveCamera( 75, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 10000 );
			camera.position.z = 450;

			scene = new THREE.Scene();

			birds = [];
			boids = [];

			for ( var i = 0; i < bird_count; i ++ ) {

				boid = boids[ i ] = new Boid();
				boid.position.x = Math.random() * 400 - 200;
				boid.position.y = Math.random() * 400 - 200;
				boid.position.z = Math.random() * 400 - 200;
				boid.velocity.x = Math.random() * 2 - 1;
				boid.velocity.y = Math.random() * 2 - 1;
				boid.velocity.z = Math.random() * 2 - 1;
				boid.setAvoidWalls( true );
				boid.setWorldSize( 500, 500, 400 );

				bird = birds[ i ] = new THREE.Mesh( new Bird(), new THREE.MeshBasicMaterial( { color:Math.random() * 0xffffff, side: THREE.DoubleSide } ) );
				bird.phase = Math.floor( Math.random() * 62.83 );
				scene.add( bird );


			}
				
			//var renderer = new THREE.WebGLRenderer( { alpha: true } );
			renderer = new THREE.CanvasRenderer( { alpha: true } );
			renderer.setClearColor( 0x000000, 0 );
			renderer.setPixelRatio( window.devicePixelRatio );
			renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );

			document.addEventListener( 'mousemove', onDocumentMouseMove, false );
			document.getElementById( id ).appendChild( renderer.domElement );

			window.addEventListener( 'resize', onWindowResize, false );

		}

		function onWindowResize() {

			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();

			renderer.setSize( window.innerWidth, window.innerHeight );

		}

		function onDocumentMouseMove( event ) {

			var vector = new THREE.Vector3( event.clientX - SCREEN_WIDTH_HALF, - event.clientY + SCREEN_HEIGHT_HALF, 0 );

			for ( var i = 0, il = boids.length; i < il; i++ ) {

				boid = boids[ i ];

				vector.z = boid.position.z;

				boid.repulse( vector );

			}

		}

		function animate() {

			requestAnimationFrame( animate );

			render();

		}

		function render() {

			for ( var i = 0, il = birds.length; i < il; i++ ) {

				boid = boids[ i ];
				boid.run( boids );

				bird = birds[ i ];
				bird.position.copy( boids[ i ].position );

				color = bird.material.color;
				if(bird_type=='bw'){
					color.r = color.g = color.b = ( 500 - bird.position.z ) / 1000;	
				}

				bird.rotation.y = Math.atan2( - boid.velocity.z, boid.velocity.x );
				bird.rotation.z = Math.asin( boid.velocity.y / boid.velocity.length() );

				bird.phase = ( bird.phase + ( Math.max( 0, bird.rotation.z ) + 0.1 )  ) % 62.83;
				bird.geometry.vertices[ 5 ].y = bird.geometry.vertices[ 4 ].y = Math.sin( bird.phase ) * 5;

			}

			renderer.render( scene, camera );

		}

	});

	$('.swarm_ref').each( function() {
		var selector = $(this).prevAll('.pb_bg:first');
		if(!selector.length) {
			var selector = $(this).prevAll('.vc_row:first');
		}
		if(!selector.length) {
			var selector = $(this).prevAll('section:first');
		}
		if(!selector.length) {
			var selector = $(this).prevAll('div:first');
		}
		var id = $(this).attr('data-id');
		var swarmcount = $(this).attr('data-swarmcount');
		var swarmrcolor = $(this).attr('data-swarmrcolor');
		var swarmpcolor = $(this).attr('data-swarmpcolor');

		if(swarmcount < 1 || !swarmcount) {
			swarmcount = 5000;
		}
		var rotateC = false;
		if(swarmrcolor == 'yes') {
			rotateC = true;
		}

		selector.prepend('<canvas id="'+id+'" class="pb_row particle_swarm"></canvas>');
		$(this).remove();

		var rctx = new SmallPRNG(+new Date()), // random generator, see ref
		    p = new Perlin(), // simplex noise generator
		    canvas = document.getElementById(id),
		    context = canvas.getContext("2d"),
		    monitor = new MouseMonitor(canvas),
		    hue = 0, particles = [], resize,
		    width, height, bounds = new Vector3D(0, 0, 0),
		    settings = {
		        particleNum: swarmcount,
		        fadeOverlay: false,
		        rotateColor: rotateC,
		        staticColor: swarmpcolor,
		        staticColorString: swarmpcolor
		    };

		p.init(function() {
		    return rctx.random(0, 255);
		});

		resize = function() {
		    canvas.width  = width  = bounds.x = window.innerWidth;
		    canvas.height = height = bounds.y = window.innerHeight;
		}; resize();
		
		for(var i = 0; i < settings.particleNum; i += 1) {
		    particles.push(new Particle(p, bounds, rctx, monitor));
		}
		
		+(function render() {
		    requestAnimFrame(render);
		    context.beginPath();
		    for(var i = 0; i < particles.length; i += 1) {
		        particles[i].step(), particles[i].render(context);
		    }
		    context.globalCompositeOperation = 'copy';
		    if(settings.rotateColor) {
		        context.strokeStyle = 'hsla(' + hue + ', 75%, 50%, 1)';
		    } else {
		        context.strokeStyle = settings.staticColorString;
		    }
		    context.stroke();
		    context.closePath();
		    hue = ((hue + .5) % 360);
		}());
	});

	$('.alian_ref').each( function() {
		var selector = $(this).prevAll('.pb_bg:first');
		if(!selector.length) {
			var selector = $(this).prevAll('.vc_row:first');
		}
		if(!selector.length) {
			var selector = $(this).prevAll('section:first');
		}
		if(!selector.length) {
			var selector = $(this).prevAll('div:first');
		}
		var id = $(this).attr('data-id');
		var aliancount = $(this).attr('data-aliancount');
		var aliancolor1 = $(this).attr('data-aliancolor1');
		var aliancolor2 = $(this).attr('data-aliancolor2');
		var bgaliancolor1 = $(this).attr('data-bgaliancolor1');
		var bgaliancolor2 = $(this).attr('data-bgaliancolor2');

		if(aliancount > 1) {
			aliancount = 1000;
		}

		selector.prepend('<canvas id="'+id+'" class="pb_row particle_alian"></canvas>');
		$(this).remove();

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		var max_particles = aliancount;
		
		var tela = document.getElementById(id);
		tela.width = $(selector).outerWidth();
		tela.height = $(selector).outerHeight();
		var canvas = tela.getContext('2d');
		
		var Particle = function () {
			function Particle(canvas, progress) {
			    _classCallCheck(this, Particle);

			    var random = Math.random();
			    this.progress = 0;
			    this.canvas = canvas;

			    this.x = $(tela).width() / 2 + (Math.random() * 200 - Math.random() * 200);
			    this.y = $(tela).height() / 2 + (Math.random() * 200 - Math.random() * 200);
			    this.s = Math.random() * 1;
			    this.a = 0;
			    this.w = $(tela).width();
			    this.h = $(tela).height();
			    this.radius = random > .2 ? Math.random() * 1 : Math.random() * 3;
			    this.color = random > .2 ? aliancolor1 : aliancolor2;
			    this.radius = random > .8 ? Math.random() * 2 : this.radius;
			    this.color = random > .8 ? aliancolor1 : this.color;

			    // this.color  = random > .1 ? "#ffae00" : "#f0ff00" // Alien
			    this.variantx1 = Math.random() * 300;
			    this.variantx2 = Math.random() * 400;
			    this.varianty1 = Math.random() * 100;
			    this.varianty2 = Math.random() * 120;
		  	}

		  	_createClass(Particle, [{
			    key: 'render',
			    value: function render() {
			      this.canvas.beginPath();
			      this.canvas.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
			      this.canvas.lineWidth = 2;
			      this.canvas.fillStyle = this.color;
			      this.canvas.fill();
			      this.canvas.closePath();
			    }
		  	}, {
		    	key: 'move',
			    value: function move() {
			      this.x += Math.cos(this.a) * this.s;
			      this.y += Math.sin(this.a) * this.s;
			      this.a += Math.random() * 0.8 - 0.4;

			      if (this.x < 0 || this.x > this.w - this.radius) {
			        return false;
			      }

			      if (this.y < 0 || this.y > this.h - this.radius) {
			        return false;
			      }
			      this.render();
			      this.progress++;
			      return true;
			    }
		  	}]);

		  	return Particle;
		}();

		var particles = [];
		var init_num = popolate(max_particles);
		function popolate(num) {
		  for (var i = 0; i < num; i++) {
		    setTimeout(function () {
		      particles.push(new Particle(canvas, i));
		    }.bind(this), i * 20);
		  }
		  return particles.length;
		}

		function clear() {
		  canvas.globalAlpha = 0.05;
		  canvas.fillStyle = bgaliancolor1;
		  canvas.fillStyle = bgaliancolor2; // Alien
		  canvas.fillRect(0, 0, tela.width, tela.height);
		  canvas.globalAlpha = 1;
		}

		function update() {
		  particles = particles.filter(function (p) {
		    return p.move();
		  });
		  if (particles.length < init_num) {
		    popolate(1);
		  }
		  clear();
		  requestAnimationFrame(update.bind(this));
		}
		update();
		
	});

	$('.three_waves_ref').each( function() {
		var selector = $(this).prevAll('.pb_bg:first');
		if(!selector.length) {
			var selector = $(this).prevAll('.vc_row:first');
		}
		if(!selector.length) {
			var selector = $(this).prevAll('section:first');
		}
		if(!selector.length) {
			var selector = $(this).prevAll('div:first');
		}
		var id = $(this).attr('data-id');
		var wcolor = $(this).attr('data-color');

		selector.prepend('<div id="'+id+'" class="pb_row three_waves"></div>');
		
		$(this).remove();

		var container = document.getElementById(id);
		var SCREEN_WIDTH = container.offsetWidth,
		SCREEN_HEIGHT = container.offsetHeight;

		var SEPARATION = 100,
        AMOUNTX = 100,
        AMOUNTY = 70;
 
	    var camera, scene, renderer;
	    var particles, particle, count = 0;
	 
	    var mouseX = 85,
	        mouseY = -342;
	 
	    var windowHalfX = window.innerWidth / 2;
	    var windowHalfY = window.innerHeight / 2;
	 
	    init();
	    animate();
	 
	    function init() {
	 
	        camera = new THREE.PerspectiveCamera( 75, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 10000 );
	        camera.position.z = 1000;
	 
	        scene = new THREE.Scene();
	        particles = new Array();
	 
	        var PI2 = Math.PI * 2;
	        var material = new THREE.SpriteMaterial({
	            color: wcolor,
	            program: function(context) {
	                context.beginPath();
	                context.arc(0, 0, .6, 0, PI2, true);
	                context.fill();
	            }
	        });
	 
	        var i = 0;
	 
	        for (var ix = 0; ix < AMOUNTX; ix++) {
	            for (var iy = 0; iy < AMOUNTY; iy++) {
	                particle = particles[i++] = new THREE.Sprite(material);
	                particle.position.x = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2);
	                particle.position.z = iy * SEPARATION - ((AMOUNTY * SEPARATION) / 2);
	                scene.add(particle);
	            }
	        }
	 
	        renderer = new THREE.CanvasRenderer({ alpha: true });
	        renderer.setClearColor( 0x000000, 0 );
	        renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
	        container.appendChild(renderer.domElement);
	 
	        document.addEventListener('mousemove', onDocumentMouseMove, false);
	        document.addEventListener('touchstart', onDocumentTouchStart, false);
	        document.addEventListener('touchmove', onDocumentTouchMove, false);
	 
	        window.addEventListener('resize', onWindowResize, false);
	    }
	 
	    function onWindowResize() {
	 
	        windowHalfX = window.innerWidth / 2;
	        windowHalfY = window.innerHeight / 2;
	 
	        camera.aspect = window.innerWidth / window.innerHeight;
	        camera.updateProjectionMatrix();
	 
	        renderer.setSize(window.innerWidth, window.innerHeight);
	 
	    }
	 
	    function onDocumentMouseMove(event) {
	        mouseX = event.clientX - windowHalfX;
	        mouseY = event.clientY - windowHalfY;
	    }
	 
	    function onDocumentTouchStart(event) {
	        if (event.touches.length === 1) {
	            event.preventDefault();
	            mouseX = event.touches[0].pageX - windowHalfX;
	            mouseY = event.touches[0].pageY - windowHalfY;
	        }
	    }
	 
	    function onDocumentTouchMove(event) {
	        if (event.touches.length === 1) {
	            event.preventDefault();
	            mouseX = event.touches[0].pageX - windowHalfX;
	            mouseY = event.touches[0].pageY - windowHalfY;
	        }
	    }

	    function animate() {
	        requestAnimationFrame(animate);
	        render();
	    }
	 
	    function render() {
	        camera.position.x += (mouseX - camera.position.x) * .05;
	        camera.position.y += (-mouseY - camera.position.y) * .05;
	        camera.lookAt(scene.position);
	        var i = 0;
	        for (var ix = 0; ix < AMOUNTX; ix++) {
	            for (var iy = 0; iy < AMOUNTY; iy++) {
	                particle = particles[i++];
	                particle.position.y = (Math.sin((ix + count) * 0.3) * 50) + (Math.sin((iy + count) * 0.5) * 50);
	                particle.scale.x = particle.scale.y = (Math.sin((ix + count) * 0.3) + 1) * 2 + (Math.sin((iy + count) * 0.5) + 1) * 2;
	            }
	        }
	        renderer.render(scene, camera);
	        count += 0.1;
	    }
	});


	$('.ambient_ref').each( function() {
		var selector = $(this).prevAll('.pb_bg:first');
		if(!selector.length) {
			var selector = $(this).prevAll('.vc_row:first');
		}
		if(!selector.length) {
			var selector = $(this).prevAll('section:first');
		}
		if(!selector.length) {
			var selector = $(this).prevAll('div:first');
		}
		var id = $(this).attr('data-id');
		var data = Array();

		data['spcolor'] = $(this).attr('data-spcolor');
		data['mpcolor'] = $(this).attr('data-mpcolor');
		data['lpcolor'] = $(this).attr('data-lpcolor');
		data['lcolor1'] = $(this).attr('data-lcolor1');
		data['lcolor2'] = $(this).attr('data-lcolor2');
		data['lcolor3'] = $(this).attr('data-lcolor3');

		selector.prepend('<canvas class="pb_row pb_ambient" id="'+id+'" ></canvas>');
		
		$(this).remove();

		var particles
		(function(){
			particles = new ParticleEngine(id, data);
			createjs.Ticker.addEventListener("tick", updateCanvas);
			window.addEventListener('resize', resizeCanvas, false);

			function updateCanvas(){
				particles.render();
			}

			function resizeCanvas(){
				particles.resize();
			}
		}());

	});


	$('.space_ref').each( function() {
		var selector = $(this).prevAll('.pb_bg:first');
		if(!selector.length) {
			var selector = $(this).prevAll('.vc_row:first');
		}
		if(!selector.length) {
			var selector = $(this).prevAll('section:first');
		}
		if(!selector.length) {
			var selector = $(this).prevAll('div:first');
		}
		var id = $(this).attr('data-id');

		var spacepcolor = $(this).attr('data-spacepcolor');
		var spacepspeed = $(this).attr('data-spacepspeed');

		selector.prepend('<div id="'+id+'" class="pb_row pb_space"></div>');
		
		$(this).remove();

		var container = document.getElementById(id);
		var SCREEN_WIDTH = container.offsetWidth,
		SCREEN_HEIGHT = container.offsetHeight,
		SCREEN_WIDTH_HALF = SCREEN_WIDTH  / 2,
		SCREEN_HEIGHT_HALF = SCREEN_HEIGHT / 2;

		var speed = parseInt(spacepspeed);
		var particles = [];

		camera = new THREE.PerspectiveCamera( 75, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 4000 );
		camera.position.z = 1000;

		var scene = new THREE.Scene();
		
		scene.add(camera);
		
		renderer = new THREE.CanvasRenderer( { alpha: true } );
		renderer.setClearColor( 0x000000, 0 );
		renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
		document.getElementById( id ).appendChild( renderer.domElement );

		createParticles();
		update();

		function createParticles() {
			var particle, material;
			for (var zpos = -1000; zpos < 1000; zpos += 5) {
				material = new THREE.SpriteMaterial({
					color: spacepcolor,
					program: function(c){
						c.beginPath();
						c.arc(0, 0, .8, 0, Math.PI * 2, true);
						c.fill();
					}
				});
				particle = new THREE.Sprite(material);
				particle.position.x = Math.random() * 1000 - 500;
				particle.position.y = Math.random() * 1000 - 500;
				particle.position.z = zpos;
				particle.scale.x = particle.scale.y = 1;
				scene.add(particle);
				particles.push(particle);
			}
		}

		function update() {
			requestAnimationFrame( update);  
			for (var i = 0; i < particles.length; i++) {
				particle = particles[i];
				particle.position.z += speed;
				if (particle.position.z > 1000) particle.position.z -= 2000;
			}
			renderer.render(scene, camera);
		}


	});
	
});