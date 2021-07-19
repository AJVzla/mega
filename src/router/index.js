import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import nuestraEmpresa from '@/components/nuestra-empresa/nuestraEmpresa'
import nuestrosComienzos from '@/components/nuestros-comienzos/nuestrosComienzos'
import Organizacion from '@/components/organizacion/Organizacion'
import nuestrasPlantas from '@/components/nuestras-plantas/nuestrasPlantas'
import esquemaDelProceso from '@/components/esquema/esquemaDelProceso'
import medioAmbiente from '@/components/medio-ambiente/medioAmbiente'
import sistemaDeGestion from '@/components/sistema-de-gestion/sistemaDeGestion'
import relacionesInstitucionales from '@/components/relaciones-institucionales/relacionesInstitucionales'
import enviarCV from '@/components/enviar-cv/enviarCV'
import contactenos from '@/components/contactenos/contactenos'
import lineaEtica from '@/components/linea-etica/lineaEtica'
import ariba from '@/components/ariba/ariba'
import regimen from '@/components/regimen/regimen'
import info from '@/components/info/info'
import gobierno from '@/components/gobierno/gobierno'
import contact from '@/components/contact/contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home/',
      name: 'Home',
      component: Home
    },
    {
      path: '/nuestraEmpresa/',
      name: 'nuestraEmpresa',
      component: nuestraEmpresa
    },
    {
      path: '/nuestrosComienzos/',
      name: 'nuestrosComienzos',
      component: nuestrosComienzos
    },
    {
      path: '/organizacion/',
      name: 'Organizacion',
      component: Organizacion
    },
    {
      path: '/nuestras-plantas/',
      name: 'nuestrasPlantas',
      component: nuestrasPlantas
    },
    {
      path: '/esquema/',
      name: 'esquemaDelProceso',
      component: esquemaDelProceso
    },
    {
      path: '/medio-ambiente/',
      name: 'medioAmbiente',
      component: medioAmbiente
    },
    {
      path: '/sistema-de-gestion/',
      name: 'sistemaDeGestion',
      component: sistemaDeGestion
    },
    {
      path: '/relaciones-institucionales/',
      name: 'relacionesInstitucionales',
      component: relacionesInstitucionales
    },
    {
      path: '/enviar-cv/',
      name: 'enviarCV',
      component: enviarCV
    },
    {
      path: '/contactenos/',
      name: 'contactenos',
      component: contactenos
    },
    {
      path: '/linea-etica/',
      name: 'lineaEtica',
      component: lineaEtica
    },
    {
      path: '/ariba/',
      name: 'ariba',
      component: ariba
    },
    {
      path: '/regimen-oferta-publica/',
      name: 'regimen',
      component: regimen
    },
    {
      path: '/informacion-financiera/',
      name: 'info',
      component: info
    },
    {
      path: '/gobierno-corporativo/',
      name: 'gobierno',
      component: gobierno
    },
    {
      path: '/contacto-inversores/',
      name: 'contact',
      component: contact
    },
    {
      path: '*',
      name: 'Default',
      component: Home
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
