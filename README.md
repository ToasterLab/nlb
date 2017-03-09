# nlb

A Node.js wrapper for the National Library Board of Singapore's WDSL API. Obtain an API key from the [NLB labs website](http://www.nlb.gov.sg/labs/mash-create-collaborate/), and get started.

## Terminology

### Title Level Media Code and Media Description Mapping

BK Books
CF Computer File
MP Maps
MU Music
MX Mixed Materials
SE Serials
VM Visual Materials

### Item Level Media Code and Media Description Mapping

BR Braille
BT Talking Book
CD Compact Disc
CDI Compact Disk Interactive
DVD Digital Video Disk
FS Filmstrip
KT Kit
M Music Scores
MAP Maps
MFC Microfiche
MFM Microfilm
MP Motion Picture
MV Videocassette
MVD Laser Disc
PA Art Print
PC Wall Chart
PIC Picture Collection
PS Flash Card
RD Recording Disk (LP Record)
RT Tape Recording (Cassettes)
ST Sculpture
TR Electronic Device(TR)
TS Tape Slide
VCD Video Compact Disc
MDPG Laser Disc (PG Rating)
MVPG Videocassette (PG Rating)
BOOK Book
VCPG Video Compact Disc (PG Rating)
MS Manuscript
CF Computer Files (CDRom or Disk)
EPHE Ephemera
CCL CCL Media Code
THS Thesis
SER Serials
DVPG Digital Video Disc (PG Rating)
POS Poster
MD16 Music Disc For NC16
MV16 Music Video For NC16
VC16 Videocassette For NC16
DV16 Digital Video For NC16
MD18 Music Disc For M18
MV18 Music Video For M18
VC18 Videocassette For M18
DV18 Digital Video For M18
MD21 Music Disc For R21
MV21 Music Video For R21
VC21 Videocassette For R21
DV21 Digital Video For R21
BD Blu-ray Disk
BDPG Blu-ray PG
BD16 Blu-ray NC16
BD18 Blu-ray M18
BD21 Blu-ray R21

### Branch Code and Branch Name Mapping

TRL Tampines Regional Library
WRL Woodlands Regional Library
CMPL Clementi Public Library
LKCRL Lee Kong Chian Reference Library
AMKPL Ang Mo Kio Public Library
BBPL Bukit Batok Public Library
BPPL Bukit Panjang Public Library
BMPL Bukit Merah Public Library
CLL Central Public Library
CSPL Cheng San Public Library
CCKPL Choa Chu Kang Public Library
GEPL Geylang East Public Library
JRL Jurong Regional Library
JWPL Jurong West Public Library
QUPL Queenstown Public Library
TPPL Toa Payoh Public Library
YIPL Yishun Public Library
OCPL Library@Orchard
CNPL Library@Chinatown
SBPL Sembawang Public Library
LSC Library Supply Centre
SRPL Serangoon Public Library
LOLC NL Heritage
MPPL Marine Parade Public Library
BEPL Bedok Public Library
SKPL Sengkang Public Library
EPPL Library@Esplanade
MOLLEY Mobile Bus
PRPL Pasir Ris Public Library
BIPL Bishan Public Library
LSCAV Library Supply Centre for AV
07LKCRL Lee Kong Chian Reference Library Level 7
08LKCRL Lee Kong Chian Reference Library Level 8
09LKCRL Lee Kong Chian Reference Library Level 9
11LKCRL Lee Kong Chian Reference Library Level 11

### Status Code and Status Description Mapping

S On Shelf / Or For Reference Only
C Charged / On Loan
T Traced
L Lost
H Hold Shelf
I In Transit
IH In Transit Hold
R Item Hold or Recalled
SP In Process
R* Request Pending

### Location Code and Location Description Mapping

ALBK Adult Lending
ALSING Adult Lending Singapore Col.
AREF Reference
ARART Reference Art
ARBUS Reference Business
ARSING Reference Singapore
JLBK Junior Lending
JLPIC Junior Lending Picture Book
JLSFIC Junior Lending Simple Fiction
JREF Junior Reference
JRSING Junior Reference Singapore
YLBK Young adult Lending
YLSING Young adult Lending Singapore
YLSTU Young adult lending Student
YREF Young adult Reference
YRSING Young People Ref. Singapore
YRSTU Young People Ref. Student
RCLOSE Reference Closed Access
STAFFCOL Staff Collection
ACL Asian Children's Lit.
UNUSE UNUSE
RRARE Reference Rare
RSEA Reference Southeast Asia
RACL Ref. Asian Children's Lit.
RDTYS Reference Donor Tan Yeok Seong
RAC Reference Asian Children
RAV Reference Audio-Visual
YRAV Young adult reference Audiovis
ALAV Adult lending Audiovisual
YLAV Young adult lending Audiovis.
JRAV Junior reference Audiovisual
JLAV Junior lending Audiovisual
LCLOSE Any age lend/ref closed stacks
RQUICK Quick Reference
JLSING Juvenile Lending Singapore
ATTBK Accompanying Item
ATTREF Accompanying Reference Item
RDTSH Reference Donor Tan Swie Hian
RCO Reference Chinese Overseas
RCR Reference China Resource
RDET Reference Donor Edwin Thumboo
RDKSC Reference Donor Koh Seow Chuan
RDLKL Reference Donor Lee Kip Lin
LREF Lending Reference
LRSING Lending RSING
ATTLR Accompanying Item for LR
ATTLRS Accompanying Item for LRSING