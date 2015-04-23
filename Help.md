# pypdp8 reference #

### Tipi di istruzioni ###

**Schema in base ai bit:**

|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Bit 1 - 4 = opcode.
Bit 5 - 16 = address.


**Istruzioni che fanno riferimento alla memoria (memory reference):**

|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|0/1|x |x |x |  | | | | | | | | | | | |

Bit 1 = D/I.
Bit 2 - 4 = operazione.
Bit 5 - 16 = indirizzo dell'operando.

Questo tipo di istruzioni non presentano la configurazione 111 nei bit dal
2 al 4, che sono invece destinati ad ospitare operazioni aritmetico logiche.
Il primo bit può essere 0 o 1, a seconda se l'indirizzamento è diretto o
indiretto.

**Istruzioni che fanno riferimento ai registri (register reference):**

|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|0 |1 |1 |1 |  | | | | | | | | | | | |

Bit 1 - 4 = indicatore di tipo.
Bit 5 - 16 = operazione da eseguire.

Presentano sempre la configurazione 0111 nei bit dall'uno al 4.


**Istruzioni di ingresso e uscita (I/O):**

|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|1 |1 |1 |1 |  | | | | | | | | | | | |

Bit 1 - 4 = indicatore di tipo.
Bit 5 - 16 = operazione da eseguire.

Presentano sempre la configurazione 1111 nei bit dall'uno al 4.

### Registri disponibili ###

  * Program Counter (PC) 12 bit
  * Memory Address Register (MAR) 12 bit
  * Memory Buffer Register (MBR) 16 bit
  * I 1 bit
  * E 1 bit
  * Accumulator A (AC) 16 bit
  * Operation Code (OPR) 3 bit
  * S, F ed R da 1 bit (appartenenti all'Unità di Controllo)

### Istruzioni disponibili: ###

**Memory Reference Istructions**

  * AND = 000 -> And logico tra AC e cella indirizzata
  * ADD = 001 -> Somma tra AC e cella indirizzata
  * LDA = 010 -> Carica in AC il contenuto della cella indirizzata
  * STA = 011 -> Salva nella cella indirizzata il contenuto di AC
  * BUN = 100 -> Salto incondizionato alla cella indirizzata
  * BSA = 101 -> Salvataggio del PC nella cella indirizzata e salto alla cella successiva a         quella indirizzata
  * ISZ = 110 -> Incrementa di 1 il contenuto della cella indirizzata e se uguale a 0, salta l'istruzione successiva

**NOTA _ADD_** : Il registro **E** viene utilizzato come un **FLAG** che _segnala un eventuale riporto nell'operazione corrente_ (quindi l'ultima addizione eseguita e non quelle precedenti).

Nei manuali ufficiali, il registro di estensione **E** (chiamato **LINK**) dopo un'addizione (**TAD**) veniva complementato logicamente se si verificava un traboccamento.

**NOTA _ISZ_** = L'istruzione ISZ non effettua un'operazione aritmetica in **E-AC** per l'incremento, il tutto avviene in sede (**in place**) tramite il registro **MBR**, dove si carica il contenuto della cella, lo si incrementa e lo si riscrive nella memoria. _Quindi il registro **E** non viene mai toccato_ e non verrà mai segnalato un eventuale traboccamento durante questa operazione.

**Register Reference Istructions**
  * CLA = 0111 1000 0000 0000 -> Azzera AC
  * CLE = 0111 0100 0000 0000 -> Azzera E
  * CMA = 0111 0010 0000 0000 -> Complementa logicamente il contenuto di AC
  * CME = 0111 0001 0000 0000 -> Complementa logicamente il contenuto di E
  * CIR = 0111 0000 1000 0000 -> Sposta verso destra i bit in E-AC
  * CIL = 0111 0000 0100 0000 -> Sposta verso sinistra i bit in E-AC
  * INC = 0111 0000 0010 0000 -> Incrementa di 1 il contenuto di AC
  * SPA = 0111 0000 0001 0000 -> Salta l'istruzione successiva se AC > 0
  * SZA = 0111 0000 0000 1000 -> Salta l'istruzione successiva se AC = 0
  * SNA = 0111 0000 0000 0100 -> Salta l'istruzione successiva se AC < 0
  * SZE = 0111 0000 0000 0010 -> Salta l'istruzione successiva se E = 0
  * HLT = 0111 0000 0000 0001 -> Arresta il sistema

**I/O Istructions**
  * INP = 1111 1000 0000 0000 -> Carica in AC il codice ASCII di un carattere in input
  * OUT = 1111 0100 0000 0000 -> Output di un carattere il cui codice ASCII è in AC
  * ION = 1111 0000 1000 0000 -> Abilita l'Interrupt
  * IOF = 1111 0000 0100 0000 -> Disabilita l'Interrupt

**Pseudo-istruzioni per l'assemblatore**
  * ORG N = Indica la locazione (indirizzo) dell'istruzione o dell'operando della riga di programma successiva. L'indirizzo _N_ viene indicato in esadecimale
  * END = Indica la fine del programma
  * DEC N = Indica un numero decimale (_N_) espresso in modulo e segno da convertire in binario in complemento a 2
  * HEX N = Indica un numero esadecimale (_N_) espresso in modulo e segno da convertire in binario in complemento a 2
  * Campo LABEL = Si può specificare un indirizzo tramite un'etichetta. Questo sarà seguito da una virgola e poi dalle istruzioni presenti in quella cella (ad esempio : `Nome, DEC 10`  oppure  `Nome, ADD 105`). Questo da la possibilità di riferirsi a questo indirizzo simbolico (_Nome_) invece di inserire l'indirizzo vero e proprio

**NOTA LABELS** = L'emulatore non da particolari restrinzioni riguardo al nome dell'indirizzo. Di norma consiste in una parola di non più _3_ caratteri alfanumerici con il primo carattere necessariamente alfabetico. Si consiglia di seguire questa convenzione.

**NOTA Generale** = Tutti gli indirizzi sono indicati in esadecimale (**HEX**), non in decimale (DEC).
