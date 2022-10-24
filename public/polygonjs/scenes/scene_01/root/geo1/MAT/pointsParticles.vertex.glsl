uniform float size;
uniform float scale;
#include <common>



// /geo1/MAT/pointsParticles/output1
uniform sampler2D texture_position;

// /geo1/MAT/pointsParticles/output1
varying vec2 particles_sim_uv_varying;

// /geo1/MAT/pointsParticles/output1
attribute vec2 particles_sim_uv_attrib;




#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>



	// /geo1/MAT/pointsParticles/constant_point_size
	float v_POLY_constant_point_size_val = 0.01;
	
	// /geo1/MAT/pointsParticles/output1
	particles_sim_uv_varying = particles_sim_uv_attrib;
	vec3 transformed = texture2D( texture_position, particles_sim_uv_varying ).xyz;
	vec3 objectNormal = normal;
	#ifdef USE_TANGENT
		vec3 objectTangent = vec3( tangent.xyz );
	#endif
	gl_PointSize = v_POLY_constant_point_size_val * size * 10.0;



	#include <morphcolor_vertex>
// removed:
//	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
// removed:
//	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}