# nlb

A Node.js wrapper for the National Library Board of Singapore's WDSL API. Obtain an API key from the [NLB labs website](http://www.nlb.gov.sg/labs/mash-create-collaborate/), and get started.

## Terminology

### Title Level Media Code and Media Description Mapping
|Code |Description|
|-----|----------|
| BK  | Books    |
| CF  | Computer |
| MP  | Maps     |
| MU  | Music    |
| MX  | Mixed    |
| SE  | Serials  |
| VM  | Visual   |

### Item Level Media Code and Media Description Mapping
| Code |  Description  |
|------|---------------|
| BR   | Braille       |
| BT   | Talking       |
| CD   | Compact       |
| CDI  | Compact       |
| DVD  | Digital       |
| FS   | Filmstrip     |
| KT   | Kit           |
| M    | Music         |
| MAP  | Maps          |
| MFC  | Microfiche    |
| MFM  | Microfilm     |
| MP   | Motion        |
| MV   | Videocassette |
| MVD  | Laser         |
| PA   | Art           |
| PC   | Wall          |
| PIC  | Picture       |
| PS   | Flash         |
| RD   | Recording     |
| RT   | Tape          |
| ST   | Sculpture     |
| TR   | Electronic    |
| TS   | Tape          |
| VCD  | Video         |
| MDPG | Laser         |
| MVPG | Videocassette |
| BOOK | Book          |
| VCPG | Video         |
| MS   | Manuscript    |
| CF   | Computer      |
| EPHE | Ephemera      |
| CCL  | CCL           |
| THS  | Thesis        |
| SER  | Serials       |
| DVPG | Digital       |
| POS  | Poster        |
| MD16 | Music         |
| MV16 | Music         |
| VC16 | Videocassette |
| DV16 | Digital       |
| MD18 | Music         |
| MV18 | Music         |
| VC18 | Videocassette |
| DV18 | Digital       |
| MD21 | Music         |
| MV21 | Music         |
| VC21 | Videocassette |
| DV21 | Digital       |
| BD   | Blu-ray       |
| BDPG | Blu-ray       |
| BD16 | Blu-ray       |
| BD18 | Blu-ray       |
| BD21 | Blu-ray       |

### Branch Code and Branch Name Mapping

| Code    | Name                                      |
| ------- | ----------------------------------------- |
| TRL     | Tampines Regional Library                 |
| WRL     | Woodlands Regional Library                |
| CMPL    | Clementi Public Library                   |
| LKCRL   | Lee Kong Chian Reference Library          |
| AMKPL   | Ang Mo Kio Public Library                 |
| BBPL    | Bukit Batok Public Library                |
| BPPL    | Bukit Panjang Public Library              |
| BMPL    | Bukit Merah Public Library                |
| CLL     | Central Public Library                    |
| CSPL    | Cheng San Public Library                  |
| CCKPL   | Choa Chu Kang Public Library              |
| GEPL    | Geylang East Public Library               |
| JRL     | Jurong Regional Library                   |
| JWPL    | Jurong West Public Library                |
| QUPL    | Queenstown Public Library                 |
| TPPL    | Toa Payoh Public Library                  |
| YIPL    | Yishun Public Library                     |
| OCPL    | Library@Orchard                           |
| CNPL    | Library@Chinatown                         |
| SBPL    | Sembawang Public Library                  |
| LSC     | Library Supply Centre                     |
| SRPL    | Serangoon Public Library                  |
| LOLC    | NL Heritage                               |
| MPPL    | Marine Parade Public Library              |
| BEPL    | Bedok Public Library                      |
| SKPL    | Sengkang Public Library                   |
| EPPL    | Library@Esplanade                         |
| MOLLEY  | Mobile Bus                                |
| PRPL    | Pasir Ris Public Library                  |
| BIPL    | Bishan Public Library                     |
| LSCAV   | Library Supply Centre for AV              |
| 07LKCRL | Lee Kong Chian Reference Library Level 7  |
| 08LKCRL | Lee Kong Chian Reference Library Level 8  |
| 09LKCRL | Lee Kong Chian Reference Library Level 9  |
| 11LKCRL | Lee Kong Chian Reference Library Level 11 |

### Status Code and Status Description Mapping

| Code| Status                           |
| --- | -------------------------------- |
| S   | On Shelf / Or For Reference Only |
| C   | Charged / On Loan                |
| T   | Traced                           |
| L   | Lost                             |
| H   | Hold Shelf                       |
| I   | In Transit                       |
| IH  | In Transit Hold                  |
| R   | Item Hold or Recalled            |
| SP  | In Process                       |
| R*  | Request Pending                  |

### Location Code and Location Description Mapping

| Code     | Location Description           |
| -------- | ------------------------------ |
| ALBK     | Adult Lending                  |
| ALSING   | Adult Lending Singapore Col.   |
| AREF     | Reference                      |
| ARART    | Reference Art                  |
| ARBUS    | Reference Business             |
| ARSING   | Reference Singapore            |
| JLBK     | Junior Lending                 |
| JLPIC    | Junior Lending Picture Book    |
| JLSFIC   | Junior Lending Simple Fiction  |
| JREF     | Junior Reference               |
| JRSING   | Junior Reference Singapore     |
| YLBK     | Young adult Lending            |
| YLSING   | Young adult Lending Singapore  |
| YLSTU    | Young adult lending Student    |
| YREF     | Young adult Reference          |
| YRSING   | Young People Ref. Singapore    |
| YRSTU    | Young People Ref. Student      |
| RCLOSE   | Reference Closed Access        |
| STAFFCOL | Staff Collection               |
| ACL      | Asian Children's Lit.          |
| UNUSE    | UNUSE                          |
| RRARE    | Reference Rare                 |
| RSEA     | Reference Southeast Asia       |
| RACL     | Ref. Asian Children's Lit.     |
| RDTYS    | Reference Donor Tan Yeok Seong |
| RAC      | Reference Asian Children       |
| RAV      | Reference Audio-Visual         |
| YRAV     | Young adult reference Audiovis |
| ALAV     | Adult lending Audiovisual      |
| YLAV     | Young adult lending Audiovis.  |
| JRAV     | Junior reference Audiovisual   |
| JLAV     | Junior lending Audiovisual     |
| LCLOSE   | Any age lend/ref closed stacks |
| RQUICK   | Quick Reference                |
| JLSING   | Juvenile Lending Singapore     |
| ATTBK    | Accompanying Item              |
| ATTREF   | Accompanying Reference Item    |
| RDTSH    | Reference Donor Tan Swie Hian  |
| RCO      | Reference Chinese Overseas     |
| RCR      | Reference China Resource       |
| RDET     | Reference Donor Edwin Thumboo  |
| RDKSC    | Reference Donor Koh Seow Chuan |
| RDLKL    | Reference Donor Lee Kip Lin    |
| LREF     | Lending Reference              |
| LRSING   | Lending RSING                  |
| ATTLR    | Accompanying Item for LR       |
| ATTLRS   | Accompanying Item for LRSING   |