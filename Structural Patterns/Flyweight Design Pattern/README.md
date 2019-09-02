The Flyweight pattern is a classical structural solution for optimizing code that is repetitive, slow and inefficiently shares data. It aims to minimize the use of memory in an application by sharing as much data as possible with related objects (e.g application configuration, state and so on).

Used when you need to create a large number of similar objects.

To reduce memory usage you share Objects that are similar in some way rather than creating new ones.

Intrinsic state - a state/property that can be reused between multiple objects

Extrinsic state - a state that is different for each object

Each "flyweight" object is divided into two pieces: the state-dependent (extrinsic) part, and the state-independent (intrinsic) part. Intrinsic state is stored (shared) in the Flyweight object. Extrinsic state is stored or computed by client objects and passed to the Flyweight when its operations are invoked.

Shared flyweight objects are immutable, that is, they cannot be changed as they represent the characteristics that are shared with other objects.

