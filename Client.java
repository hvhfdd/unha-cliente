import java.io.*;
import java.net.*;

public class Client {
    public static void main(String[] args) {
        try {
            // O IP do servidor deve ser o IP público do computador que está rodando o servidor
            String serverAddress = "SEU_ENDERECO_IP"; // Substitua pelo IP do servidor
            int serverPort = 12345;

            // Conecta ao servidor
            Socket socket = new Socket(serverAddress, serverPort);
            System.out.println("Conectado ao servidor em " + serverAddress + ":" + serverPort);

            // Fluxo de entrada e saída de dados
            BufferedReader input = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            PrintWriter output = new PrintWriter(socket.getOutputStream(), true);
            BufferedReader consoleInput = new BufferedReader(new InputStreamReader(System.in));

            // Envia uma mensagem para o servidor
            System.out.print("Digite sua mensagem: ");
            String message = consoleInput.readLine();
            output.println(message);

            // Recebe a resposta do servidor
            String serverResponse = input.readLine();
            System.out.println("Resposta do servidor: " + serverResponse);

            // Fecha a conexão
            socket.close();
        } catch (IOException e) {
            System.err.println("Erro ao conectar ao servidor: " + e.getMessage());
        }
    }
}
