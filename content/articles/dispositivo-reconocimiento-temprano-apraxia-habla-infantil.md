---
title: Dispositivo para reconocimiento temprano de apraxia del habla infantil
description: Desarrollo de dispositivo para la grabación de audio de bebes para análisis del habla
img: felicidadmasalla.webp
alt: felicidadmasalla
github: https://github.com/joansolano/record-raspberry
arrImgs: [
    sph0645.webp,
    sph0645.webp
]
---

La apraxia del habla se trata de un transtorno poco común en el cual el niño tiene dificultad para articular palabras, debido a que al cerebro se le dificulta planificar el movimiento del habla.

Además, los músculos del habla pueden estar en perfecto estado y sin embargo, presentar este transtorno. Transtorno que por lo general se puede tratar mediante terapia del habla. Sin embargo, es difícil reconocer este transtorno en etapas tempranas puesto que los bebés hablan muy poco, por no decir nada y además, los dispositivos y técnicas para el reconocimiento resultan ser costosos.

## **Introducción**

El proyecto en sí, surgió en la materia Proyecto 3 de sexto semestre de la carrera en donde el profesor presentó a nuestro grupo (6 personas, incluyéndome) a una psicologa que estaba trabajando en el reconocimiento temprano de este transtorno.

Ella ya había desarrollado un algoritmo de machine learning que mediante un archivo de audio se encargaba de clasificar si un bebé presentaba o no apraxia del habla. Sin embargo, ella no contaba con el dispositivo para la recolección de los archivos de audio.

Indudablemente eso se podría hacer con un teléfono pero no era lo ideal, puesto que no se le puede dar un teléfono a un bebé. Ya se sabe lo dañinos que somos de bebés. Entonces, ella quería algo hecho para un bebé y que a la vez tuviera la capacidad de grabar y guardar archivos de audio de los distintos sonidos que pueda hacer un bebé.

Realmente nos interesó la idea que ella estaba planteando y decidimos ayudarla. Igual, era el único proyecto de la lista de proyectos que resultaba algo diferente y ningún otro grupo lo había tomado. Ahí estaba la oportunidad para diferenciarse.

Después de eso empezamos a reconocer todo lo del proyecto, más especificamente el estado del arte, los alcances del dispositivo, a quien va dirigido, las leyes con respecto a este tipo de dispositivos, etc. No quiero explicar todo eso. Tampoco lo recuerdo así que pasaré de una vez a la parte de selección de los componentes electrónicos, software y demás.

## **Selección de componentes electrónicos**

Para la selección, había que empezar por la parte más importante del dispositivo de recolección de audio, el micrófono. En el mercado hay muchos tipos de <a href="https://es.wikipedia.org/wiki/Micrófono" target="_blank" rel="noopener noreferrer">micrófonos</a> como los de condensador o dinámicos pero son muy grandes para este tipo de aplicación. La respuesta estaba en los micrófonos tipo <a href="https://es.wikipedia.org/wiki/Micrófono#Micrófono_microelectromecánico_(MEMS)" target="_blank" rel="nopener noreferrer">MEMS</a> que son incluso más pequeños que una falange de un dedo y que perfectamente puede caber en cualquier juguete.

Para nuestro caso, elegimos el <a href="https://www.adafruit.com/product/3421" target="_blank" rel="noopener noreferrer">Adafruit SPH0645LM4H</a>:

<span class="img"></span>

En un principio resultaba muy tentador hacerlo todo desde cero por el hecho de que uno cree que tiene tiempo para todo, hecho que resulta ser falso la mayoría de las veces. 

<span class="img"></span>


