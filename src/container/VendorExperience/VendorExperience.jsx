import React, { useState } from 'react'
import { Experience } from '../../components'
import './VendorExperience.scss'

const VendorExperience = () => {

    const [experiences, setExperiences] = useState([
        {
            db: 'https://s3-alpha-sig.figma.com/img/0493/bb11/c6836ebdeb71a1529d6a7d7aff07c76b?Expires=1654473600&Signature=KRaTXrnCaZijxrFjPPIlVOBBa9UHTByuqUwIaRZPg9lNF3wrGszuuO43uH6eI14qPm5VX7o3SIBdawkqBRiRAlwCHTDlvkJzV68bNUsA~UFOfHecOBgluKFIsr-45RSxEg6QgN9rVvWeNz6WkoG0tOcIKDVpX~LlmApsQqbxZZE2TKJ3C~S6d4zPJi8g5o76OEFyOicnMQ0kQBN2TiRFBH91hn~cykPdRZpZChgJwncN8qOzts02J5TKBwHzPkkHbOPvhI2v-IbkS1fpCBQm8~O6zCckwDWLjMby~RBGAclSOycQGs10y3WFognfOWRNC9ogrxLRFr8qPlKHXACtPQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            firstName: "Temi ",
            lastName: "Obadofin",
            location: "",
            customer: false,
            story: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
        },
        {
            db: 'https://s3-alpha-sig.figma.com/img/257f/7b68/b1669a05cd65e19a39807f0e8dfd4196?Expires=1654473600&Signature=QTPM3XogQj6RzwB8KfekYaLpQ8zyqSYcDSoHAyqfN1vA13azY6xd0wFkuBZRrrjfzdBqbA73xxM1SjW0Q~T~5ZuoDGrbyWB9inucPeDRoHoT5-IfpxmGB4khBjiLKcHL3O--uLypvI8csWTHs6yDRnT2fofnVc2zUGBsEH7B5ICQJLiOwHKGc23wD5Hmq0cxXrP9iH4PDg-OiSM1X4X240jC198VMY8P8ptwfNPclKklXvPWbAf7f7OGT69v~aDGPiCVZGxfoBofHsWrn2TtVdyoVGOEmlz97DQw41iK1kpseAm6tupXBbY3T7Zs3bKECfLSUMvqwyglXQh6amP6ZQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            firstName: "Promise ",
            lastName: "Ejiofor",
            location: "",
            customer: false,
            story: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
        },
        {
            db: 'https://s3-alpha-sig.figma.com/img/ab94/4070/a748a9a93b70760c48f55b5bdf47dfde?Expires=1654473600&Signature=dl9sSu9B6USmDKh8~K7OTMDlHgmoZd5AGCO-f6QIKDQQYjZVmrtuoT-zx-jpfGVeQP0LnN~LqLhLvggEr74a-CJ3~hhzFfZP~yD4LAsd~302qCGuQC~UVx7fof-q1YiA674sc5xaoN-abypPsKFT5MFURuIZmn5f887IeqNBYM7E04JIfZLYHk8aa1ZdShrYmMotNtglV9xC4AFqfDK16H4ErF4ylqgN2FfBWcMQazzny85FktMsaDcmClSmfBdkS-HFazR0echNHlV1ugy4X6pwqlx8QJOyA4M9~S6DDHu-VWDkd3ia3XoGN5znPAINiI2AdPJ5PZEmdddmVzxyZg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            firstName: "Feyisola ",
            lastName: "Arinola",
            location: "",
            customer: false,
            story: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
        },
        {
            db: 'https://s3-alpha-sig.figma.com/img/4927/1773/c89d961a70c06677609a1f62a1903618?Expires=1654473600&Signature=UbBILW2BaOBDNHzH016WW6g7Uk~awNiJaJIGZXbmGpHbkGncFu77jHdm5K7K1Oo-IEnLwSZ3OLmR9IslDgFyPAIHfDakN3qKDhOOz6kLDFsNc6~2QysrCklaBqDZRpWgOCnLuIenj4iWWVVqspd662Z1ZpUpBCo4Qfi5zjWMN0W~MQGAB3bQnlh1SqZP6EiieI4cIefY5Ng6ieV4hnBigB8HJuWoj3F5qZW3nJ3doOZIlxl-8j4HYLzxBAdkwlCRrptsIVmS2ogi~oyfThDnJkqLlbRutG~BsRL3jlNnPjYKO108gznq2TpPMYNO94lchm3SOdLJuLsdXmAufZrLkw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            firstName: "Karen ",
            lastName: "Ibeh",
            location: "",
            customer: false,
            story: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
        },
        {
            db: 'https://s3-alpha-sig.figma.com/img/db9a/cdf7/3709e0a99aaeacc8c12fd34ba3629797?Expires=1654473600&Signature=X8vCwzHlu38oK8ZDXoJG-WFO9tgpCc4v~zaSq0O4dTn~NyAD5pKRVB8gPhxE-noBPoVML~6ydhIxHbhK17H4Aj2zK7F3r4RwGCbXLhfW23dyLeNXsf~dhzxKsJpqIUXJj~roOKX3PupJuZTED~aRDCQUiP8qmf~O-yYtcFNR~NiWDV1dDlZwY8cmFOSEiqLW9nDSJ4dJyj009hjCiPAWy7ZNislIVnXk2VWeQ9Vn66XtHaOTzf6Ovd3VAerXKWTw4ix2udt7iJMwrjj6nLA31QfSg5cHS6JYaxF2DTRAxQAPyFi-T51x7B4kOQUVw51Ody7M5ve8DfrBYyDSKmF6~A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            firstName: "Oluchi ",
            lastName: "Uzo",
            location: "",
            customer: false,
            story: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
        },
        {
            db: 'https://s3-alpha-sig.figma.com/img/d31d/4de5/32e911e9f0b0ff79d47f272ad7bc82ce?Expires=1654473600&Signature=dZQoegDTEzWBSbHdyVfbySkIKQHe7zQIBSJSdMKrbPRE2oDE~M40vgrReo1-O1J4iRCyp-Tg0KiB4v2-rJan8jxHU1TZpc4BiCDplu55UWvJAUcwe~onvt1j9c8hSD17-Z6L6jguJqe3SRq5vnFrZjFNMhGgGQlqgrwZ0PJOQqEuIk9O3MQYzwv-Ew4Tj4amVqvkdnVqfI68vF72jBHSBcaG802P4qNb4usNuLKehYSKjFWkWX5AFVnYMFSOnyPzMaYMhzMaTPQ8zSUZhlOiOQ7LGxfvnPfpZOBcUVz4BeGxjCyaaDz~d7EOy4BeJRQElIPt1l91j2NYDe2B1eTuTA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            firstName: "Amos ",
            lastName: "Okafor",
            location: "",
            customer: false,
            story: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
        },
    ])


  return (
    <div className="vendorexperience">
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

export default VendorExperience
