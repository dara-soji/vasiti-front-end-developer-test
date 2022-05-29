import React, { useState } from 'react'
import { Experience } from '../../components'
import './CustomerExperience.scss'

const CustomerExperience = () => {

    const [experiences, setExperiences] = useState([
        {
            db: 'https://s3-alpha-sig.figma.com/img/e645/5ccd/8c695f5d13239b1e98ad7ae9bfee93f1?Expires=1654473600&Signature=SkE21q4IGsEvir5pWmwOe1QypCsN4BJIN7Znk2gm~IofGow45CDNy52keEn3MCnDNhpXhKjZwec61vgc0TZV9LQxIrUZ1l6e~PQ~2nS3ZGJbphlVRWr8E2U9Wm5MTIvWAammA8oKMUjoD3hmITVDVQEX-ZPsBZIAlFPJNi8fqKSFRpWv7~DLMnxL9efH0ZkzpWKdZeIGvmZi4hDl96v-uM-cDdY5Xgolg6URoFaEXFKuygK~6D0vT08Fmm-9kIkqcTfOIYh1JaT0HyaJq3pW8MPdi38XD3nTjmK34cFGsxoWLgReohWaTj6CHkjK9swuJLWe~t-qFHruMfXcCTTIgg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            firstName: "Joseph",
            lastName: "Ike",
            location: "in Ikeja",
            customer: true,
            story: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
        },
        {
            db: 'https://s3-alpha-sig.figma.com/img/89c9/d898/0915363a2c70375926d3e4a60ea94e15?Expires=1654473600&Signature=VGVgnn9L9I-HB3LVSpVihmNTew402gToxAkLfwTc94qjZYXWhDcRxtMH~~ISSLZmpSyxX4aECpYcyWQIdSdIFU09l0THKHBkFCNNpt3mpfIyO4Xq5JxznL0l1gakWbxtziUnwjpEmr6kwnyu-bBsZs85FIFOejA-y84WdOYAGMa0jgnQuyBOwfjvlStUuN6VQ2i-yjMD0zOGlF7e9qvFVGb6DtvXT~X9H~pmxAWc9gvuXle2~E0KBxmWkZtyqmNZpsMrKILTlDzYyJQ2kxSd~c4HsrQEOAi-qMxacvx40lrr0GVzdyF4uO9-Abr806DjnjnEGqJcRRZYCa-L-r-FNw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            firstName: "Adetola ",
            lastName: "Fashina",
            location: "ibadan",
            customer: true,
            story: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deser unt ut voluptate aute id deserunt nisi. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        },
        {
            db: 'https://s3-alpha-sig.figma.com/img/4af1/a18a/a15ec02a62e7b8519dbeb11ee25bc152?Expires=1654473600&Signature=R9FvOS5fxpNWUI4MwdSBxMn4NH4Tbkd8emnRSFKy1swXhP~XD7ZYuujRomsrYCSckdLPg11-bqnlcKR4mjzEr~AZoafQoCVGPWAbNxFw6lB3Hu68PxPAxJX6HO5vfDs0ZMPuD9JN3UyWuBSn0cX~tS3oCd8SmlmSGRFkbeLMl4u3h-tE-iIpKzW9QwPojC0GNW0B02un8-TA98gT2itmDZhZmo2RJzZ570RZ0a37iAZzXC2SiAl53TwLAczf4SLMFBlRm8T0oNI-WMSURMRyKwSCFadgsKCeP9kbnUzjTC3F4dbj9v1A38K4LiCEfQV2i8A~VdkiwazP0es2k3CfkA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            firstName: "Emmanuel ",
            lastName: "Fayemi",
            location: "in Akoka",
            customer: true,
            story: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
        },
        {
            db: 'https://s3-alpha-sig.figma.com/img/b5e2/03c7/1abcd61e29dac3dc5c315fc30386d71e?Expires=1654473600&Signature=Fezy1bByS4-y7mcvX6b9xatqGFv4eEuAADzhm3rGYiNgmFfaEFxmjW1BPW7swIBTwEGW7~-2D4-NESrcQosXl5rEvrdHa54cuopl-jI6ytOT5-wVbqUD6ARQdL-qou9QKvS9uYkdhJCSV53uPwUf3bSWySPiWv9rnSnAG-DUC10EMLrapNXuKzfuqmZQIeVB-fCHZQN1dYF43p9w1oTUQqCMOBdkT2W9WjeBtJYxd4uWQ9AB4GZt75Izk5uousFVbrSwZrUamVhpxNUAYh0gcpc3tGFAI5VE~5JOcqqgccwLa1FSUoS3Z221wHCoF01BlrS7~WsywMt0nta712hhjg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            firstName: "Chisom ",
            lastName: "Obilor",
            location: "in Magodo",
            customer: false,
            story: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
        },
        {
            db: 'https://s3-alpha-sig.figma.com/img/2d6c/0dc0/dadc1d5d643e28b129ff9a1e93417afa?Expires=1654473600&Signature=SrTb74enRJL-TDT0l3rLNt0db4IplM4~mpVH~QWMuAiT1rjRhBuYAsQ6xA2XuS5t0ZzEt4DySGOsDZxrE563DqDBm4TQ9UkxppoHJgsxfhAKiZkq5QAk6~srpFyAPeQC5JN7msTP5Cl246~MuW~DoowI1Y4WiSerY4Y40umy7d~L8ON0xNX4hz75uty~lXFkVhkeK6IkhC8jzLnDZE7HiqdNO7qfQxS9CAWqKX7dTcLQ-fm3N1AI6dWe~KERs0uYhegYUQ2GlUiG7ptr0c7SbsP1Cn2QZ-bkByr8YTcA4dmALqQ5O5TN7xEywdZJlwlynvT7jf~QUJ4rjHvWbzo5yw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            firstName: "Adunoluwa ",
            lastName: "Adeyemi",
            location: "Iwo Road",
            customer: false,
            story: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
        },
        {
            db: 'https://s3-alpha-sig.figma.com/img/7896/c74d/cb5830d8bf710598f31d2fd8b94cc9bc?Expires=1654473600&Signature=I~u3ENVfBWRCl-udkeoEGlncIFs173Hw~DQECjsM4OX1bVRjSb26imOwlvwRDyS9ipe8f89Ek6wfO3NazTsJlckJJLZgMOqQPbVHLCQ4Iznb0KhD~fQwaUlCW-bNGa5UF2buIp1TMSxS8FIBakHjCKIDxIAn9OOaIgz-n7x30k-Hxqm2WzCcAHhDo8R5pgawnwJzcgx9MNvIASL9KGp8WiZ2nyuDX~qFRaClRKRiq-CDF6t7uLv5T4-DWF7nsQVF-ShZ7p067CtSZvuM1PIXAGoX0zsd~JdfM2RJfvL4J-oYLEYwVWo9nJlpqq-dpWDr~fooTxUugBXC83N2Noy0Mg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            firstName: "Chidi ",
            lastName: "Okeke",
            location: "in Somolu",
            customer: false,
            story: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
        },
    ])
  return (
    <div className="customerexperience">
      {experiences.map((experience, index) =>(
          <Experience 

          key={index}
            db={experience.db}
            firstName={experience.firstName}
            lastName={experience.lastName}
            location={experience.location}
            customer={experience.customer}
            story={experience.story}
          />
      ))}
    </div>
  )
}

export default CustomerExperience
