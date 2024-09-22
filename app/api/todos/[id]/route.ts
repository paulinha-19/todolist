import { HttpStatusCode } from "axios";
import { connectMongo } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { Todos } from "@/models/Todo";

// Function to handle PUT requests
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  await connectMongo();
  const body = await req.json();
  try {
    const todo = await Todos.findByIdAndUpdate(params.id, body);
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

// Function to handle GET requests (retrieve a specific todo by ID)
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  await connectMongo();
  try {
    const todo = await Todos.findById(params.id);
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
    const todo = await Todos.findByIdAndDelete(params.id);
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
