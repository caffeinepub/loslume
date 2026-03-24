import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Iter "mo:core/Iter";
import Text "mo:core/Text";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";

actor {
  type Message = {
    name : Text;
    email : Text;
    message : Text;
  };

  module Message {
    public func compare(message1 : Message, message2 : Message) : Order.Order {
      Text.compare(message1.message, message2.message);
    };
  };

  let messages = Map.empty<Nat, Message>();
  var messageCount = 0;

  public shared ({ caller }) func submitMessage(name : Text, email : Text, message : Text) : async Nat {
    let newMessage : Message = {
      name;
      email;
      message;
    };
    messages.add(messageCount, newMessage);
    let returnId = messageCount;
    messageCount += 1;
    returnId;
  };

  public query ({ caller }) func getAllMessages() : async [Message] {
    messages.values().toArray().sort();
  };

  public query ({ caller }) func getMessage(id : Nat) : async Message {
    switch (messages.get(id)) {
      case (null) { Runtime.trap("Message does not exist") };
      case (?message) { message };
    };
  };
};
