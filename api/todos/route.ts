import { HttpStatusCode } from "axios";
import { connectMongo } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import Todo from "@/models/todo";

// Function to handle POST requests
export async function POST(req: NextRequest) {
  await connectMongo();
  const { description } = await req.json();
  try {
    const body = { description: description, completed: false };
    const todo = new Todo(body);
    const document = await todo.save();
    return NextResponse.json(
      { data: document, message: "Your todo has been created" },
      { status: HttpStatusCode.Created }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error, message: "Error creating todo" },
      { status: HttpStatusCode.BadRequest }
    );
  }
}

// Function to handle PUT requests
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  await connectMongo();
  const body = await req.json();
  try {
    const todo = await Todo.findByIdAndUpdate(params.id, body, { new: true });
    if (!todo) {
      return NextResponse.json(
        { message: "Todo not found" },
        { status: HttpStatusCode.NotFound }
      );
    }
    return NextResponse.json(
      { data: todo, message: "Todo updated successfully" },
      { status: HttpStatusCode.Ok }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error, message: "Error updating todo" },
      { status: HttpStatusCode.BadRequest }
    );
  }
}

// Function to handle GET requests (retrieve all todos)
export async function GET() {
  await connectMongo();
  try {
    const todos = await Todo.find();
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

// Function to handle GET requests (retrieve a specific todo by ID)
export async function GETONE(
  request: Request,
  { params }: { params: { id: string } }
) {
  await connectMongo();
  try {
    const todo = await Todo.findById(params.id);
    if (!todo) {
      return NextResponse.json(
        { message: "Todo not found" },
        { status: HttpStatusCode.NotFound }
      );
    }
    return NextResponse.json(
      { data: todo, message: "Todo recovered successfully" },
      { status: HttpStatusCode.Ok }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error, message: "Error retrieving" },
      { status: HttpStatusCode.InternalServerError }
    );
  }
}

// Function to handle DELETE requests (delete a specific todo by ID)
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  await connectMongo();
  try {
    const todo = await Todo.findByIdAndDelete(params.id);
    if (!todo) {
      return NextResponse.json(
        { message: "Todo not found" },
        { status: HttpStatusCode.NotFound }
      );
    }
    return NextResponse.json(
      { data: todo, message: "Todo deleted succesfully" },
      { status: HttpStatusCode.Ok }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error, message: "Error deleting todo" },
      { status: HttpStatusCode.BadRequest }
    );
  }
}
