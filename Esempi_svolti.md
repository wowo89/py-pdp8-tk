# Esercizio 1 #

```
ORG 100
LDA X
BSA CHK
INC
HLT
X, AND Y
Y, HEX 200
CHK, HEX 0
CIR
SNA
BUN CHK I
ADD X
BUN CHK I
END
```

| | ORG 100 | Contenuto |
|:|:--------|:----------|
|100 | LDA X |
|101 | BSA CHK |
|102 | INC |
|103 | HLT |
|104 | X, AND Y | 0000 0001 0000 0101|
|105 | Y, HEX 200 |
|106 | CHK, HEX 0 |
|107 | CIR |
|108 | SNA |
|109 | BUN CHK I |
|10A | ADD X |
|10B | BUN CHK I |
|  | END |


# Risoluzione Esercizio 1 #

| Indirizzo |  | Contenuto di AC | Contenuto E |
|:----------|:-|:----------------|:------------|
| 100 | Si carica in AC X, che ha il contenuto che vedete in tabella. Il contenuto è dato dall'operatore AND (OPR = 000, quindi dal secondo al quarto bit), <br> dall'indirizzo Y (105 in hex, che va a formare la parte dal 5° al 16° bit) e da I (che non essendo presente mette a 0 il primo bit) <table><thead><th> 0000 0001 0000 0101 </th><th> 0 </th></thead><tbody>
<tr><td> 101 </td><td> Si memorizza in CHK l'indirizzo di ritorno (che è l'istruzione successiva a quella attuale, puntata gia dal PC), cioè 102 e si passa all'indirizzo successivo a CHK, <br> ovvero 107 (che verrà puntato dal PC, poiché sarà la prossima istruzione da eseguire) </td><td> 0000 0001 0000 0101 </td><td> 0 </td></tr>
<tr><td> 107 </td><td> Spostiamo verso destra i bit in E-AC </td><td> 0000 0000 1000 0010 </td><td> 1 </td></tr>
<tr><td> 108 </td><td> Controlliamo se AC è negativo. Visto che è falso, andiamo subito all'istruzione successiva, senza saltarla </td><td> 0000 0000 1000 0010 </td><td> 1 </td></tr>
<tr><td> 109 </td><td> Saltiamo all'indirizzo memorizzato in CHK (non in CHK, perché c'è I), ovvero 102 </td><td> 0000 0000 1000 0010 </td><td> 1 </td></tr>
<tr><td> 102 </td><td> Incrementiamo di 1 il contenuto di AC </td><td> 0000 0000 1000 0011 </td><td> 1 </td></tr>
<tr><td> 103 </td><td> Esecuzione completata, fermiamo la macchina </td><td> 0000 0000 1000 0011 </td><td> 1 </td></tr></tbody></table>

<h3>Risultato in AC = 0083 HEX</h3>

<br>
<br>
<hr><br>
<br>
<br>
<br>
<hr><br>
<br>
<br>
<br>
<h1>Esercizio 2</h1>

<pre><code>ORG 100<br>
LDA X<br>
AND Y<br>
BSA CHK<br>
INC<br>
HLT<br>
X,AND Y<br>
Y,HEX 200<br>
CHK, HEX 0<br>
CIL<br>
SNA<br>
BUN CHK I<br>
AND X<br>
BUN CHK I<br>
END <br>
</code></pre>

<table><thead><th> </th><th> ORG 100 </th><th> Contenuto </th></thead><tbody>
<tr><td>100 </td><td> LDA X </td></tr>
<tr><td>101 </td><td> AND Y </td></tr>
<tr><td>102 </td><td> BSA CHK </td></tr>
<tr><td>103 </td><td> INC </td></tr>
<tr><td>104 </td><td> HLT </td></tr>
<tr><td>105 </td><td> X, AND Y </td><td> 0000 0001 0000 0101</td></tr>
<tr><td>106 </td><td> Y, HEX 200 </td><td> 0000 0010 0000 0000 </td></tr>
<tr><td>107 </td><td> CHK, HEX 0 </td></tr>
<tr><td>108 </td><td> CIL </td></tr>
<tr><td>109 </td><td> SNA </td></tr>
<tr><td>10A </td><td> BUN CHK I </td></tr>
<tr><td>10B </td><td> ADD X </td></tr>
<tr><td>10C </td><td> BUN CHK I </td></tr>
<tr><td>  </td><td> END </td></tr></tbody></table>


<h1>Risoluzione Esercizio 2</h1>

<table><thead><th> Indirizzo </th><th>  </th><th> Contenuto di AC </th><th> Contenuto E </th></thead><tbody>
<tr><td> 100 </td><td> Si carica in AC X, che ha il contenuto che vedete in tabella. </td><td> 0000 0001 0000 0101 </td><td> 0 </td></tr>
<tr><td> 101 </td><td> Si fa un AND tra AC ed il contenuto di Y </td><td> 0000 0000 0000 0000 </td><td> 0</td></tr>
<tr><td> 102 </td><td> Si memorizza in CHK l'indirizzo di ritorno (che è l'istruzione successiva a quella attuale, puntata gia dal PC), cioè 103 e si passa all'indirizzo successivo a CHK, <br> ovvero 108(che verrà puntato dal PC, poiché sarà la prossima istruzione da eseguire) </td><td> 0000 0000 0000 0000 </td><td> 0 </td></tr>
<tr><td> 108 </td><td> Spostiamo verso sinistra i bit in E-AC </td><td> 0000 0000 0000 0000 </td><td> 0 </td></tr>
<tr><td> 109 </td><td> Controlliamo se AC è negativo. Visto che è falso, andiamo subito all'istruzione successiva, senza saltarla </td><td> 0000 0000 0000 0000 </td><td> 0 </td></tr>
<tr><td> 10A </td><td> Saltiamo all'indirizzo memorizzato in CHK (non in CHK, perché c'è I), ovvero 103 </td><td> 0000 0000 0000 0000 </td><td> 0 </td></tr>
<tr><td> 103 </td><td> Incrementiamo di 1 il contenuto di AC </td><td> 0000 0000 0000 0001 </td><td> 0 </td></tr>
<tr><td> 104 </td><td> Esecuzione completata, fermiamo la macchina </td><td> 0000 0000 0000 0001 </td><td> 0 </td></tr></tbody></table>

<h3>Risultato in AC = 0001 HEX</h3>

<br>
<br>
<hr><br>
<br>
<br>
<br>
<hr><br>
<br>
<br>
<br>
<h1>Esercizio 3</h1>

<pre><code>ORG 100<br>
LDA 104<br>
BUN 104<br>
DEC 104<br>
DEC 258<br>
ADD 103 I<br>
CLE<br>
ADD 102<br>
HLT<br>
END<br>
</code></pre>

<table><thead><th> </th><th> ORG 100 </th><th> Contenuto </th></thead><tbody>
<tr><td>100 </td><td> LDA 104 </td></tr>
<tr><td>101 </td><td> BUN 104 </td></tr>
<tr><td>102 </td><td>DEC 104 </td><td> 0000 0000 0110 1000</td></tr>
<tr><td>103 </td><td>DEC 258 </td><td> 0000 0001 0000 0010</td></tr>
<tr><td>104 </td><td> ADD 103 I </td><td> 1001 0001 0000 0011</td></tr>
<tr><td>105 </td><td> CLE </td></tr>
<tr><td>106 </td><td> ADD 102 </td></tr>
<tr><td>107 </td><td> HLT </td></tr>
<tr><td>  </td><td>END</td></tr></tbody></table>

<h1>Risoluzione Esercizio 3</h1>

<table><thead><th> Indirizzo </th><th>  </th><th> Contenuto di AC </th><th> Contenuto E </th></thead><tbody>
<tr><td> 100 </td><td> Carichiamo il contenuto della cella 104 in AC </td><td> 1001 0001 0000 0011 </td><td> 0 </td></tr>
<tr><td> 101 </td><td> Saltiamo all'indirizzo 104 </td><td>  1001 0001 0000 0011 </td><td> 0 </td></tr>
<tr><td> 104 </td><td> Sommiamo ad AC il contenuto della cella con indirizzo di memoria contenuto in 103. <br> Quindi AC + il contenuto della cella 102, visto che DEC 258 = HEX 0102. </td><td> 1001 0001 0110 1011 </td><td> 0 </td></tr>
<tr><td> 105 </td><td> Cancelliamo il contenuto di E </td><td>  1001 0001 0110 1011 </td><td> 0 </td></tr>
<tr><td> 106 </td><td> Sommiamo ad AC il contenuto della cella 102 </td><td> 1001 0001 1101 0011 </td><td> 0 </td></tr>
<tr><td> 107 </td><td> Esecuzione completata, fermiamo la macchina </td><td> 1001 0001 1101 0011 </td><td> 0 </td></tr></tbody></table>

<h3>Risultato in AC = 91D3 HEX</h3>

<br>
<br>
<hr><br>
<br>
<br>
<br>
<hr><br>
<br>
<br>
<br>
<h1>Esercizio 4</h1>

<pre><code>ORG 100<br>
LDA 104<br>
BUN 104<br>
DEC 104<br>
DEC 258<br>
ADD 103 I<br>
CLE<br>
ADD 103<br>
HLT<br>
END<br>
</code></pre>

<table><thead><th> </th><th> ORG 100 </th><th> Contenuto </th></thead><tbody>
<tr><td>100 </td><td> LDA 104 </td></tr>
<tr><td>101 </td><td> BUN 104 </td></tr>
<tr><td>102 </td><td>DEC 104 </td><td> 0000 0000 0110 1000</td></tr>
<tr><td>103 </td><td>DEC 258 </td><td> 0000 0001 0000 0010</td></tr>
<tr><td>104 </td><td> ADD 103 I </td><td> 1001 0001 0000 0011</td></tr>
<tr><td>105 </td><td> CLE </td></tr>
<tr><td>106 </td><td> ADD 103 </td></tr>
<tr><td>107 </td><td> HLT </td></tr>
<tr><td>  </td><td>END</td></tr></tbody></table>

<h1>Risoluzione Esercizio 4</h1>

<table><thead><th> Indirizzo </th><th>  </th><th> Contenuto di AC </th><th> Contenuto E </th></thead><tbody>
<tr><td> 100 </td><td> Carichiamo il contenuto della cella 104 in AC </td><td> 1001 0001 0000 0011 </td><td> 0 </td></tr>
<tr><td> 101 </td><td> Saltiamo all'indirizzo 104 </td><td>  1001 0001 0000 0011 </td><td> 0 </td></tr>
<tr><td> 104 </td><td> Sommiamo ad AC il contenuto della cella con indirizzo di memoria contenuto in 103. <br> Quindi AC + il contenuto della cella 102, visto che DEC 258 = HEX 0102. </td><td> 1001 0001 0110 1011 </td><td> 0 </td></tr>
<tr><td> 105 </td><td> Cancelliamo il contenuto di E </td><td>  1001 0001 0110 1011 </td><td> 0 </td></tr>
<tr><td> 106 </td><td> Sommiamo ad AC il contenuto della cella 102 </td><td> 1001 0010 0110 1101 </td><td> 0 </td></tr>
<tr><td> 107 </td><td> Esecuzione completata, fermiamo la macchina </td><td> 1001 0010 0110 1101 </td><td> 0 </td></tr></tbody></table>

<h3>Risultato in AC = 926D HEX</h3>

<br>
<br>
<hr><br>
<br>
<br>
<br>
<hr><br>
<br>
<br>
<br>
<h1>Esercizio 5</h1>

<pre><code>ORG 100<br>
LDA 106<br>
BUN 104<br>
X, DEC 100<br>
Y, HEX 102<br>
ADD X<br>
CIR<br>
STA Y I<br>
HLT<br>
END<br>
</code></pre>

<table><thead><th> </th><th> ORG 100 </th><th> Contenuto </th></thead><tbody>
<tr><td>100 </td><td> LDA 106 </td></tr>
<tr><td>101 </td><td> BUN 104 </td></tr>
<tr><td>102 </td><td>X, DEC 100</td><td> 0000 0000 0110 0100 </td></tr>
<tr><td>103 </td><td>Y, HEX 102</td></tr>
<tr><td>104 </td><td>ADD X</td></tr>
<tr><td>105 </td><td>CIR </td></tr>
<tr><td>106 </td><td>STA Y I </td><td> 1011 0001 0000 0011 </td></tr>
<tr><td>107 </td><td>HLT</td></tr>
<tr><td>  </td><td>END </td></tr></tbody></table>

<h1>Risoluzione Esercizio 5</h1>

<table><thead><th> Indirizzo </th><th> </th><th> Contenuto AC </th><th> Contenuto E </th></thead><tbody>
<tr><td>100 </td><td> Carichiamo il contenuto della cella 106 in AC </td><td>1011 0001 0000 0011 </td><td>0 </td></tr>
<tr><td>101 </td><td> Saltiamo all'indirizzo 104 </td><td> 1011 0001 0000 0011 </td><td>0 </td></tr>
<tr><td>104 </td><td> Sommiamo il contenuto dell'indirizzo X con AC </td><td> 1011 0001 0110 0111 </td><td> 0 </td></tr>
<tr><td>105 </td><td> Effettuiamo uno shift verso destra di E-AC </td><td> 0101 1000 1011 0011 </td><td> 1 </td></tr>
<tr><td>106 </td><td> Salviamo il contenuto di AC nella cella il cui indirizzo è contenuto in Y,<br> cioè la 102 (ovvero X) </td><td> 0101 1000 1011 0011 </td><td> 1 </td></tr>
<tr><td>107 </td><td> Esecuzione completata, fermiamo la macchina </td><td> 0101 1000 1011 0011 </td><td> 1 </td></tr></tbody></table>

<h3>Risultato in X = 58B3 HEX, Y = 0102 HEX</h3>

<br>
<br>
<hr><br>
<br>
<br>
<br>
<hr><br>
<br>
<br>
<br>
<h1>Esercizio 6</h1>

<pre><code>ORG 100<br>
LDA 106<br>
BUN 104<br>
X, DEC 400<br>
Y, HEX 102<br>
ADD X<br>
CIL<br>
STA Y I<br>
HLT<br>
END<br>
</code></pre>

<table><thead><th> </th><th> ORG 100 </th><th> Contenuto </th></thead><tbody>
<tr><td>100 </td><td> LDA 106 </td></tr>
<tr><td>101 </td><td> BUN 104 </td></tr>
<tr><td>102 </td><td>X, DEC 400</td><td> 0000 0001 1001 0000 </td></tr>
<tr><td>103 </td><td>Y, HEX 102</td></tr>
<tr><td>104 </td><td>ADD X</td></tr>
<tr><td>105 </td><td>CIL </td></tr>
<tr><td>106 </td><td>STA Y I </td><td> 1011 0001 0000 0011 </td></tr>
<tr><td>107 </td><td>HLT</td></tr>
<tr><td>  </td><td>END </td></tr></tbody></table>

<h1>Risoluzione Esercizio 6</h1>

<table><thead><th> Indirizzo </th><th> </th><th> Contenuto AC </th><th> Contenuto E </th></thead><tbody>
<tr><td>100 </td><td> Carichiamo il contenuto della cella 106 in AC </td><td>1011 0001 0000 0011 </td><td>0 </td></tr>
<tr><td>101 </td><td> Saltiamo all'indirizzo 104 </td><td> 1011 0001 0000 0011 </td><td>0 </td></tr>
<tr><td>104 </td><td> Sommiamo il contenuto dell'indirizzo X con AC </td><td> 1011 0010 1001 0011 </td><td> 0 </td></tr>
<tr><td>105 </td><td> Effettuiamo uno shift verso sinistra di E-AC </td><td> 0110 0101 0010 0110 </td><td> 1 </td></tr>
<tr><td>106 </td><td> Salviamo il contenuto di AC nella cella il cui indirizzo è contenuto in Y,<br> cioè l'indirizzo 102 (ovvero X) </td><td> 0110 0101 0010 0110 </td><td> 1 </td></tr>
<tr><td>107 </td><td> Esecuzione completata, fermiamo la macchina </td><td> 0110 0101 0010 0110 </td><td> 1 </td></tr></tbody></table>

<h3>Risultato in X = 6526 HEX, Y = 0102 HEX</h3>

<br>
<br>
<hr><br>
<br>
<br>
<br>
<hr><br>
<br>
<br>
<br>
<h1>Esercizio 7</h1>

<pre><code>ORG 880<br>
LDA X<br>
CMA<br>
STA X<br>
ISZ X<br>
Y, STA 102<br>
LDA Y<br>
ADD X<br>
CIR<br>
STA X<br>
X, DEC 0<br>
HLT<br>
END<br>
</code></pre>

<table><thead><th> </th><th>ORG 880 </th><th> Contenuto </th></thead><tbody>
<tr><td>880 </td><td> LDA X </td></tr>
<tr><td>881 </td><td> CMA </td><td> 0111 0010 0000 0000 </td></tr>
<tr><td>882 </td><td> STA X </td></tr>
<tr><td>883 </td><td> ISZ X </td></tr>
<tr><td>884 </td><td> Y, STA 102 </td><td> 0011 0001 0000 0010 </td></tr>
<tr><td>885 </td><td> LDA Y </td></tr>
<tr><td>886 </td><td> ADD X </td></tr>
<tr><td>887 </td><td> CIR </td></tr>
<tr><td>888 </td><td> STA X </td></tr>
<tr><td>889 </td><td> X, DEC 0 </td><td> 0000 0000 0000 0000 </td></tr>
<tr><td>88A </td><td> HLT </td></tr>
<tr><td>  </td><td>END </td></tr></tbody></table>

<h1>Risoluzione Esercizio 7</h1>

<table><thead><th>Indirizzo </th><th> </th><th> Contenuto AC </th><th> Contenuto X </th></thead><tbody>
<tr><td>880 </td><td> Si carica X in AC </td><td> 0000 0000 0000 0000 </td><td> 0000 0000 0000 0000 </td></tr>
<tr><td>881 </td><td> Si commuta logicamento il contenuto di AC (E non si tocca) </td><td> 1111 1111 1111 1111 </td><td> 0000 0000 0000 0000 </td></tr>
<tr><td>882 </td><td> Si Memorizza il contenuto di AC in X </td><td> 1111 1111 1111 1111 </td><td> 1111 1111 1111 1111 </td></tr>
<tr><td>883 </td><td> Si incrementa il contenuto di X e se uguale a 0, si salta l'istruzione successiva. </td><td> 1111 1111 1111 1111 </td><td> 0000 0000 0000 0000 </td></tr>
<tr><td>885 </td><td> Si carica Y in AC </td><td> 0011 0001 0000 0010 </td><td> 0000 0000 0000 0000 </td></tr>
<tr><td>886 </td><td> Si somma il contenuto di AC con X </td><td> 0011 0001 0000 0010 </td><td> 0000 0000 0000 0000 </td></tr>
<tr><td>887 </td><td> Si shifta verso destra il contenuto di E-AC </td><td> 0001 1000 1000 0001 </td><td> 0000 0000 0000 0000 </td></tr>
<tr><td>888 </td><td> Si memorizza il contenuto di AC in X </td><td> 0001 1000 1000 0001 </td><td> 0001 1000 1000 0001 </td></tr>
<tr><td>889 </td><td> All'indirizzo X ora avremo il seguente comando : <code>ADD 881</code>, visto che il <br> primo bit è 0, I non è presente. Il secondo e terzo bit sono uguali a 0 ed il quarto uguale ad 1, come <br> il codice OPR dell'istruzione ADD. La parte restante forma l'indirizzo dell'operando. </td><td> 1000 1010 1000 0001 </td><td> 0001 1000 1000 0001 </td></tr>
<tr><td>88A </td><td> Esecuzione completata, fermiamo la macchina </td><td> 1000 1010 1000 0001 </td><td> 0001 1000 1000 0001 </td></tr></tbody></table>

<h2>Risultato in X = 1881 HEX, AC = 8A81</h2>

<br>
<br>
<hr><br>
<br>
<br>
<br>
<hr><br>
<br>
<br>
<br>
<h1>Esercizio 8</h1>

<pre><code>ORG 205<br>
CLA<br>
CLE<br>
ADD 20A<br>
CIR<br>
STA 20A<br>
AND 418 I<br>
BUN 205<br>
HLT<br>
END<br>
</code></pre>

<table><thead><th> </th><th>ORG 205 </th><th> Contenuto </th></thead><tbody>
<tr><td>205 </td><td>CLA </td></tr>
<tr><td>206 </td><td>CLE </td></tr>
<tr><td>207 </td><td>ADD 20A </td></tr>
<tr><td>208 </td><td>CIR </td></tr>
<tr><td>209 </td><td>STA 20A </td></tr>
<tr><td>20A </td><td>AND 418 I </td><td> 1000 0100 0001 1000 </td></tr>
<tr><td>20B </td><td>BUN 205 </td></tr>
<tr><td>20C </td><td>HLT </td></tr>
<tr><td>  </td><td> END </td></tr></tbody></table>

<table><thead><th> Indirizzo </th><th> </th><th> Contenuto AC </th><th> Contenuto dell'indirizzo 20A </th></thead><tbody>
<tr><td>205 </td><td> Cancelliamo il contenuto di AC </td><td> 0000 0000 0000 0000 </td><td> 1000 0100 0001 1000 </td></tr>
<tr><td>206 </td><td> Cancelliamo il contenuto di E </td><td> 0000 0000 0000 0000 </td><td> 1000 0100 0001 1000 </td></tr>
<tr><td>207 </td><td> Sommiamo il contenuto di AC con quello dell'indirizzo 20A </td><td> 1000 0100 0001 1000 </td><td> 1000 0100 0001 1000 </td></tr>
<tr><td>208 </td><td> Shiftiamo a destra il contenuto di E-AC </td><td> 0100 0010 0000 1100 </td><td> 1000 0100 0001 1000 </td></tr>
<tr><td>209 </td><td> Memorizziamo il contenuto di AC all'indirizzo 20A </td><td>  0100 0010 0000 1100 </td><td> 0100 0010 0000 1100 </td></tr>
<tr><td>20A </td><td> Il contenuto di questo indirizzo ora corrisponde al comando <code>BUN 20C</code> </td><td> 0100 0010 0000 1100 </td><td> 0100 0010 0000 1100 </td></tr>
<tr><td>20C </td><td> Esecuzione completata, fermiamo la macchina </td><td> 0100 0010 0000 1100 </td><td> 0100 0010 0000 1100 </td></tr></tbody></table>

<h2>Risultato in AC = 420C HEX</h2>

<br>
<br>
<hr><br>
<br>
<br>
<br>
<hr><br>
<br>
<br>
<br>
<h1>Esercizio 9</h1>

<pre><code>ORG 100<br>
LDA X<br>
CMA<br>
CME<br>
CIR<br>
CIR<br>
CIL<br>
STA X<br>
ADD Y I<br>
STA X<br>
HLT<br>
X, DEC -1<br>
Y, -----<br>
END<br>
</code></pre>

Quale valore deve avere Y per avere come risultato in X : F040 HEX ?<br>
<br>
<table><thead><th> Indirizzo </th><th> Contenuto binario </th><th> ORG 100 </th></thead><tbody>
<tr><td>100	</td><td>	0010 0001 0000 1010</td><td>	LDA X </td></tr>
<tr><td>101	</td><td>	0111 0010 0000 0000</td><td>	CMA  </td></tr>
<tr><td>102	</td><td>	0111 0001 0000 0000</td><td>	CME	</td></tr>
<tr><td>103	</td><td>	0111 0000 1000 0000</td><td>	CIR	</td></tr>
<tr><td>104	</td><td>	0111 0000 1000 0000</td><td>	CIR	</td></tr>
<tr><td>105	</td><td>	0111 0000 0100 0000</td><td>	CIL	</td></tr>
<tr><td>106	</td><td>	0011 0001 0000 1010</td><td>	STA X</td></tr>
<tr><td>107	</td><td>	1001 0001 0000 1011</td><td>	ADD Y I</td></tr>
<tr><td>108	</td><td>	0011 0001 0000 1010</td><td>	STA X</td></tr>
<tr><td>109	</td><td>	0111 0000 0000 0001</td><td>	HLT </td></tr>
<tr><td>10A	</td><td>	1111 1111 1111 1111</td><td>	X</td></tr>
<tr><td>10B	</td><td>	0000 0001 0000 0101</td><td>	Y</td></tr>
<tr><td>  </td><td>  </td><td> END </td></tr></tbody></table>

<h1>Risoluzione Esercizio 9</h1>

<table><thead><th> Indirizzo </th><th> </th><th> Contenuto E </th><th>Contenuto AC</th><th> Contenuto X </th></thead><tbody>
<tr><td>100 </td><td> Carichiamo X in AC </td><td> 0 </td><td> 1111 1111 1111 1111 </td><td> 1111 1111 1111 1111 </td></tr>
<tr><td>101 </td><td> Commutiamo logicamente il contenuto di AC </td><td> 0 </td><td> 0000 0000 0000 0000 </td><td> 1111 1111 1111 1111 </td></tr>
<tr><td>102 </td><td> Commutiamo logicamente il contenuto di E </td><td> 1 </td><td> 0000 0000 0000 0000 </td><td> 1111 1111 1111 1111 </td></tr>
<tr><td>103 </td><td> Shiftiamo a destra il contenuto di E-AC </td><td> 0 </td><td> 1000 0000 0000 0000 </td><td> 1111 1111 1111 1111 </td></tr>
<tr><td>104 </td><td> Shiftiamo a destra il contenuto di E-AC </td><td> 0 </td><td> 0100 0000 0000 0000 </td><td> 1111 1111 1111 1111 </td></tr>
<tr><td>105 </td><td> Shiftiamo a sinistra il contenuto di E-AC </td><td> 0 </td><td> 1000 0000 0000 0000 </td><td> 1111 1111 1111 1111 </td></tr>
<tr><td>106 </td><td> Memorizziamo il contenuto di AC in X </td><td> 0 </td><td> 1000 0000 0000 0000 </td><td> 1000 0000 0000 0000 </td></tr>
<tr><td>107 </td><td> Y deve contenere l'indirizzo dell'operando da sommare con AC (visto che è presente I).<br> L'unico candicato possibili per avere F040 da 8000 (valore attuale di X) è l'indirizzo 105. <br> In AC, abbiamo già il contenuto di X. </td><td> 0 </td><td> 1111 0000 0100 0000 </td><td>  1000 0000 0000 0000 </td></tr>
<tr><td>108 </td><td> Memorizziamo il contenuto di AC in X </td><td>0 </td><td>1111 0000 0100 0000 </td><td> 1111 0000 0100 0000 </td></tr>
<tr><td>109 </td><td> Esecuzione completata, fermiamo la macchina </td><td> 0 </td><td>1111 0000 0100 0000 </td><td> 1111 0000 0100 0000 </td></tr></tbody></table>

<h2>Valore da inserire in Y = 0105 HEX</h2>
<h4>In bit corrisponde a 0111 0000 0100 0000, cioè l'istruzione CIL</h4>
<table><thead><th> Contenuto dell'indirizzo 105, corrispondente all'istruzione CIL </th><th>0111 0000 0100 0000 </th><th> + </th></thead><tbody>
<tr><td> Contenuto di X dopo l'esecuzione dell'istruzione all'indirizzo 106 </td><td>1000 0000 0000 0000 </td><td> = </td></tr>
<tr><td>  </td><td> 1111 0000 0100 0000 </td></tr></tbody></table>

<br>
<br>
<hr><br>
<br>
<br>
<br>
<hr><br>
<br>
<br>
<br>
<h1>Esercizio 10</h1>

<pre><code>ORG 100<br>
Z,LDA X<br>
CMA<br>
STA X<br>
ISZ X<br>
Y,CLA<br>
LDA Y<br>
ADD X<br>
CIR<br>
STA X<br>
X, DEC 0<br>
LDA Z<br>
HLT<br>
END<br>
</code></pre>

<table><thead><th> </th><th>ORG 100</th><th> Contenuto </th></thead><tbody>
<tr><td>100 </td><td> Z,LDA X </td><td> 0010 0001 0000 1001 </td></tr>
<tr><td>101 </td><td> CMA </td></tr>
<tr><td>102 </td><td> STA X </td></tr>
<tr><td>103 </td><td> ISZ X </td></tr>
<tr><td>104 </td><td> Y,CLA </td><td> 0111 1000 0000 0000 </td></tr>
<tr><td>105 </td><td> LDA Y </td></tr>
<tr><td>106 </td><td> ADD X </td></tr>
<tr><td>107 </td><td> CIR </td></tr>
<tr><td>108 </td><td> STA X </td></tr>
<tr><td>109 </td><td> X, DEC 0 </td><td> 0000 0000 0000 0000 </td></tr>
<tr><td>10A </td><td> LDA Z </td></tr>
<tr><td>10B </td><td> HLT </td></tr>
<tr><td>  </td><td>END </td></tr></tbody></table>

<h1>Risoluzione Esercizio 10</h1>

<table><thead><th> Indirizzo </th><th> </th><th> Contenuto E </th><th> Contenuto AC </th><th> Contenuto X </th></thead><tbody>
<tr><td> 100 </td><td> Carichiamo il contenuto di X in AC </td><td> 0 </td><td> 0000 0000 0000 0000 </td><td> 0000 0000 0000 0000 </td></tr>
<tr><td> 101 </td><td> Complementiamo logicamente AC </td><td> 0 </td><td> 1111 1111 1111 1111 </td><td> 0000 0000 0000 0000 </td></tr>
<tr><td> 102 </td><td> Memorizziamo AC in X </td><td> 0 </td><td> 1111 1111 1111 1111 </td><td> 1111 1111 1111 1111 </td></tr>
<tr><td> 103 </td><td> Incrementiamo X e controlliamo se è uguale a 0. <br> Il controllo è positivo, quindi saltiamo la prossima istruzione. </td><td> 0 </td><td> 1111 1111 1111 1111 </td><td> 0000 0000 0000 0000 </td></tr>
<tr><td> 105 </td><td> Carichiamo il contenuto di Y in AC, che corrisponderà al comando CLA </td><td> 0 </td><td> 0111 1000 0000 0000 </td><td> 0000 0000 0000 0000 </td></tr>
<tr><td> 106 </td><td> Sommiamo il contenuto di AC con X </td><td> 0 </td><td> 0111 1000 0000 0000 </td><td> 0000 0000 0000 0000 </td></tr>
<tr><td> 107 </td><td> Effettuiamo uno shift a destra del contenuto di AC </td><td> 0 </td><td> 0011 1100 0000 0000 </td><td> 0000 0000 0000 0000 </td></tr>
<tr><td> 108 </td><td> Memorizziamo il contenuto di AC in X </td><td> 0 </td><td> 0011 1100 0000 0000 </td><td> 0011 1100 0000 0000 </td></tr>
<tr><td> 109 </td><td> Il contenuto di X ora, equivale al seguente comando : I = 0, quindi non è presente; <br> OPR = 011 -> STA. Quindi <code>STA C00</code>. <br> Memorizzeremo il contenuto attuale di AC nella cella indicata, anche se non sappiamo cosa contenga. </td><td> 0 </td><td> 0011 1100 0000 0000 </td><td> 0011 1100 0000 0000 </td></tr>
<tr><td> 10A </td><td> Carichiamo in AC il contenuto di Z </td><td> 0 </td><td> 0010 0001 0000 1001 </td><td> 0011 1100 0000 0000 </td></tr>
<tr><td> 10B </td><td> Esecuzione completata, fermiamo la macchina </td><td> 0 </td><td> 0010 0001 0000 1001 </td><td> 0011 1100 0000 0000 </td></tr></tbody></table>

<h2>Risultato in AC = 2109 HEX, X = 3C00 HEX -> <code>STA C00</code></h2>