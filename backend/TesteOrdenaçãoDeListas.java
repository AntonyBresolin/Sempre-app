/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package testeordenaçãodelistas;

import java.util.List;
import java.util.Random;

/**
 *
 * @author Administrador
 */

public class TesteOrdenaçãoDeListas {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {

        // TODO code application logic here
        int colunaBorda = 4, tamanhoColuna = 10, tamanhoLinha = 10, novoTamanhoMatriz = 0;

        int[][] tamanhoMatriz = new int[tamanhoColuna][tamanhoLinha];

        //Mostra matriz inicial criada.
        mostrarMatriz(tamanhoMatriz, tamanhoColuna, tamanhoLinha);

        System.out.printf("\nAplicação da borda na coluna: %d\n", colunaBorda);
        //Aplica borda
        tamanhoMatriz = aplicarBorda(tamanhoMatriz, tamanhoColuna, tamanhoLinha, colunaBorda);

        //Mostra matriz com borda
        mostrarMatriz(tamanhoMatriz, tamanhoColuna, tamanhoLinha);

        //preenche matriz com dados
        tamanhoMatriz = preencheMatriz(tamanhoMatriz, tamanhoColuna, tamanhoLinha);

        System.out.println("\nMatriz Preenchida: ");

        //Apresenta matriz preenchida
        mostrarMatriz(tamanhoMatriz, tamanhoColuna, tamanhoLinha);

        /*
        Ordenação de matriz
         */
      //  int[][] matrizOrdenada = ordenarMatriz(tamanhoMatriz, tamanhoColuna, tamanhoLinha);
        System.out.print("\n");
        System.out.print("\n");

        System.out.println("Matriz ordenada:");
        //mostrarMatriz(matrizOrdenada, tamanhoColuna + tamanhoColuna, tamanhoLinha);

    }

    public static void mostrarMatriz(int matriz[][], int tamanhoColuna, int tamanhoLinha) {
        for (int i = 0; i < tamanhoColuna; i++) {
            for (int j = 0; j < tamanhoLinha; j++) {
                System.out.printf("%d ", matriz[i][j]);
            }
            System.out.print("\n");
        }
    }

    public static int[][] aplicarBorda(int matriz[][], int tamanhoColuna, int tamanhoLinha, int colunaBorda) {
        float quantidadeBordas = tamanhoColuna / colunaBorda;

        
        for (int i = 0; i < tamanhoColuna; i++) {
            int contadorBordas = 1;
            for (int j = 0; j < tamanhoLinha; j++) {
                if (contadorBordas <= quantidadeBordas) {
                    if (j == colunaBorda * contadorBordas) {
                        matriz[i][j-1] = 9999;
                        contadorBordas++;
                    }
                } 
            }
        }
        return matriz;
    }

    public static int[][] preencheMatriz(int matriz[][], int tamanhoColuna, int tamanhoLinha) {

        Random gerador = new Random();
        for (int i = 0; i < tamanhoColuna; i++) {
            for (int j = 0; j < tamanhoLinha; j++) {
                if (matriz[i][j] != 9999) {
                    matriz[i][j] = gerador.nextInt(10);
                }
            }
        }
        return matriz;
    }

    public static int[][] ordenarMatriz(int matriz[][], int tamanhoColuna, int tamanhoLinha) {
        int contadorBorda = 0;
        int colunaNovaMatriz = 0;
        int linhaNovaMatriz = 0;
        int contaUnidadesAntesBorda = 0;

        int[][] novaMatriz = new int[tamanhoColuna + tamanhoColuna][tamanhoLinha];

        for (int i = 0; i < tamanhoColuna; i++) {
            for (int j = 0; j < tamanhoLinha; j++) {
                if (matriz[i][j] != 9999) {
                    if (contadorBorda == 0) {
                        contaUnidadesAntesBorda++;
                    }
                    novaMatriz[colunaNovaMatriz][linhaNovaMatriz] = matriz[i][j];
                    linhaNovaMatriz++;
                } else {
                    novaMatriz[colunaNovaMatriz][linhaNovaMatriz] = 9999;
                    linhaNovaMatriz = 0;
                    colunaNovaMatriz++;
                    contadorBorda++;
                }

                if (contadorBorda == 1) {
                    linhaNovaMatriz = 0;
                }
            }
        }
        return novaMatriz;
    }
}
