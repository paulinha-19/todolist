import { HttpStatusCode } from "axios";
import { connectMongo } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import { Todos } from "@/models/Todo";

// Function to handle POST requests
export async function POST(req: NextRequest) {
  await connectMongo();
  const { description } = await req.json();
  try {
    const body = { description: description, completed: false };
    const todo = await Todos.create(body);
    return NextResponse.json(
      { data: todo, message: "Your todo has been created" },
      { status: HttpStatusCode.Created }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error, message: "Error creating todo" },
      { status: HttpStatusCode.BadRequest }
    );
  }
}

// Function to handle GET requests (retrieve all todos)
export async function GET() {
  await connectMongo();
  try {
    const todos = await Todos.find();
    console.log("todos GET", todos);
    if (todos.length === 0) {
      return NextResponse.json(
        { data: todos, message: "Todo empty" },
        { status: HttpStatusCode.Ok }
      );
    }
    return NextResponse.json(
      { data: todos, message: "All recovered successfully" },
      { status: HttpStatusCode.Ok }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error, message: "Error retrieving all" },
      { status: HttpStatusCode.InternalServerError }
    );
  }
}
