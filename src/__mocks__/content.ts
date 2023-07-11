import type { ContentTransaccionalHome } from "@/types/cms";

export const MOCK_HOME_CONTENT: ContentTransaccionalHome = {
  frequent_questions: [
    {
      title: "Conocé más sobre la nueva plataforma",
      questionsTranzas: [
        {
          answer:
            "La nueva versión fue pensada para mejorar tu experiencia de compra a partir de **nuevas funcionalidades** realizadas específicamente para **PyMEs y emprendedores**. Vas a poder ver cambios en nuestros servicios, los cuales te ayudarán a realizar tus envíos de forma mucho más fácil  y así llegar antes a la casa de tus clientes. \n",
          question: "¿Cuáles son los beneficios de usar la nueva versión de Pymes.andreani.com?",
          identifier: "beneficios-nueva-plataforma",
        },
        {
          answer:
            "En esta versión podrás realizar envíos de:** Paquetería, Sobres, Bigger y Pallets.** Y el resto de nuestros servicios, por el momento, continuarán gestionándose desde Andreani.com: **Carta Documento, Logística Inversa, entre otros.** ¡Pero no te preocupes! Podrás acceder a todos los servicios desde Pymes.andreani.com. \n",
          question: "¿Qué servicios puedo utilizar en la nueva versión y cuáles no?",
          identifier: "servicios-nueva-plataforma",
        },
        {
          answer:
            "A diferencia de la versión anterior no deberás gestionar la carga masiva por fuera de la gestión de tu envío. *¿Cómo hacerlo?* Al presionar sobre el servicio que deseas enviar, luego de colocar el origen, en la siguiente pantalla te brindará la opción de cómo queres cargar tu envío, si de **forma manual** o por **carga masiva** presionas sobre esa opción y ¡listo! continuá con la gestión de tu envío.",
          question: "¿Desde dónde puedo realizar una carga masiva en la nueva versión?",
          identifier: "carga-masiva",
        },
        {
          answer:
            "En la nueva versión el servicio de **Colecta por domicilio** es posible únicamente para el envío de paquetes. ¿Cómo hacerlo? Deberás gestionar primero la carga de tus envíos desde el servicio de **Paquetería **y, al finalizar, en el resumen total te aparecerá en la parte superior la opción de agregar la** Colecta por domicilio**  y mismo, te sumará el monto de este servicio a tu resumen total.",
          question: "¿Desde dónde puedo solicitar la Colecta por domicilio en la nueva versión?",
          identifier: "colecta-por-domicilio",
        },
        {
          answer:
            "Sí, podrás acceder a todos nuestros servicios desde Pymes.andreani.com, cuando selecciones el servicio de Carta documento te redirigirá a la versión anterior de forma automática para que continúes con tu envío y tendrás diferenciado el historial de envíos. En la sección “Ver mis envíos” encontrarás los accesos para ingresar a uno o al otro. \n",
          question:
            "¿Puedo utilizar ambas plataformas a la vez si genero envíos, por ejemplo, de Carta documento y Paquetería?  ",
          identifier: "dos-plataformas-a-la-vez",
        },
        {
          answer:
            "Tendrás un acceso directo desde la nueva plataforma para poder consultarlos, ingresá desde la sección _“Ver mis envíos”_ y allí encontrarás el acceso a _“Ver mis envíos anteriores”._ Recordá que el historial de envíos permanecerá visible por 3 meses.\n",
          question: "¿Qué pasa con el historial de mis envíos que realicé en la versión anterior?",
          identifier: "historial-de-envios",
        },
        {
          answer:
            "Encontrarás 3 solapas: Envíos pendientes, Envíos de Tiendanube y Envíos Pagados. En la primera, se ubican todos aquellos envíos que iniciaste y por algún motivo no fueron finalizados, por lo que podés retomarlos desde allí; además de que, si tu envío fue generado con Link de Pago ó utilizaste el servicio de Andreani Envíos, mientras siga pendiente, quedará ubicado en esta sección para poder retomarlo. En la segunda opción, si estás integrado con Tiendanube, en dicha solapa podrás hacer el seguimiento de tus ordenes y, en la tercera, se encuentran todos los envíos ya generados para que puedas darle seguimiento. ",
          question: "¿Qué información encuentro en la sección “Mis envíos”?",
          identifier: "seccion-mis-envios",
        },
        {
          answer:
            "El registro de tus datos personales y los de tu emprendimiento te permitirán disponibilizar de beneficios y funcionalidades exclusivas. Podrás acceder a ver todos tus datos personales y los de tu emprendimiento que completaste en el inicio de sesión ingresando desde el menú lateral a** “Ver mi perfil”.** Vas a poder visualizar y modificar todos los datos que quieras. Recordá que es muy importante tener actualizados los datos de facturación para una correcta emisión de tus facturas y las direcciones de origen que te permitirán realizar tus envíos de forma más rápida.",
          question:
            "¿Para qué sirve el registro de los datos personales y los de mi emprendimiento? ¿Desde dónde los puedo ver y/o modificar?",
          identifier: "mi-perfil",
        },
        {
          answer:
            "Si no imprimiste la etiqueta ni bien finalizaste el envío, podés ingresar a la sección _“Ver mis envíos”_ y desde allí tildar un envío o los que quieras desde el recuadro pequeño que se encuentra al costado de los mismos y luego en la parte superior debes presionar sobre el ícono de la impresora y ¡listo!",
          question: "¿Cómo imprimo mis etiquetas?",
          identifier: "como-imprimo-etiquetas",
        },
      ],
    },
  ],
  sections: [
    {
      cards: [],
      title: "Tus Envíos Pendientes",
    },
    {
      cards: [
        {
          url: {
            url: "https://perfil.andreani.com/",
          },
          icon: "//a.storyblok.com/f/63950/150x150/825ddda46e/icono-direcciones-16px.svg",
          title: "Mis direcciones",
          enabled: true,
          subtitle: "",
        },
        {
          url: {
            url: "https://perfil.andreani.com/",
          },
          icon: "//a.storyblok.com/f/63950/150x150/c9fe2332be/icono-colaboradores-16px.svg",
          title: "Colaboradores",
          enabled: true,
          subtitle: "",
        },
        {
          url: {
            url: "https://perfil.andreani.com/",
          },
          icon: "//a.storyblok.com/f/63950/24x24/12a6da45a7/agenda-24px.svg",
          title: "Agenda de clientes",
          enabled: true,
          subtitle: "",
        },
      ],
      title: "Accesos rápidos",
    },
  ],
  banner: [
    {
      image_banner: "https://componentesui.blob.core.windows.net/imgs/feed_pymes/banner_feed.png",
      title_banner: "Andreani envíos",
      button_banner: {
        link: {
          id: "",
          url: "https://pymes.andreani.com/hacer-envio/andreani-env%C3%ADos?paso=origen",
          linktype: "url",
          fieldtype: "multilink",
          cached_url: "https://pymes.andreani.com/hacer-envio/andreani-env%C3%ADos?paso=origen",
        },
        text: "Ir al servicio",
      },
      subtitle_banner:
        "Con Andreani envíos podrás enviar un link a tu destinatario para que complete sus datos y abone el envío.",
    },
  ],
};

export default MOCK_HOME_CONTENT;
