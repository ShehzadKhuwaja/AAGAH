import 'package:flutter/material.dart';

// Custom widget for email text field
class CustomTextField extends StatelessWidget {
  final TextEditingController controller;
  final String text;
  final IconData icon;
  final bool obscureText;

  CustomTextField({
    Key? key,
    required this.controller,
    required this.text,
    required this.icon,
    required this.obscureText,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return TextField(
      controller: controller,
      style: const TextStyle(
          color: Color.fromARGB(230, 94, 92, 92)), // Set text color to white
      decoration: InputDecoration(
        filled: true, // Fill the background
        fillColor: Color.fromARGB(246, 218, 215, 215), // Set the background color to greyish
        prefixIcon: Stack(
          alignment: Alignment.center,
          children: [
            Icon(icon,
                color: Color.fromARGB(230, 94, 92, 92)), // Set icon color to white
            Positioned(
              left: 36, // Adjust the position of the line
              top: 4, // Adjust the position of the line
              bottom: 4, // Adjust the position of the line
              child: Container(
                width: 1, // Set the width of the line
                color: Colors.grey[600], // Set the color of the line
              ),
            ),
          ],
        ),
        hintText: text,
        labelStyle: const TextStyle(
            color: Color.fromARGB(230, 94, 92, 92)), // Set label text color to white
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(8.0),
        ),
      ),
      obscureText: obscureText,
    );
  }
}